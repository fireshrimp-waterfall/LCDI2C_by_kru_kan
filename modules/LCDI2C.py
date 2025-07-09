from machine import Pin, I2C
import time
import array as arr
import os


machine = os.uname().machine
if ("KidBright32" in machine) or ("KidMotor V4" in machine):
    i2c1 = I2C(1, scl=Pin(5), sda=Pin(4), freq=400000)
elif "Mbits" in machine:
    i2c1 = I2C(0, scl=Pin(21), sda=Pin(22), freq=400000)
else:
    i2c1 = I2C(0, scl=Pin(22), sda=Pin(21), freq=400000)


LCDI2C_ADDR = 0x3F

PIN_RS = False

BIT_EN = 0x04
BIT_RS = 0x01
BIT_RW = 0x02
BIT_BLACKLIGHT = 0x08
_backlightval = BIT_BLACKLIGHT

BIT_BLINK = 0x01
BIT_CURSOR = 0x02
BIT_DISPLAY = 0x04

LCD_SETCGRAMADDR = 0x40
LCD_SETDDRAMADDR = 0x80

BLINK = False
CURSOR = False
sDISPLAY = True
BLACKLIGHT = True

def writeD(data):
    data = bytes([ data ])
    i2c1.writeto(LCDI2C_ADDR, data)

def SEND(data,mode):
    highnib = data&0xf0
    lownib = (data<<4)&0xf0
    write4bits((highnib)|mode)
    write4bits((lownib)|mode)
    
def write4bits(value):
    expanderWrite(value)
    pulseEnable(value)

def expanderWrite(data):
    data = data|_backlightval;
    i2c1.writeto(LCDI2C_ADDR, bytes([ data ]))

def pulseEnable(_data):
    i2c1.writeto(LCDI2C_ADDR, bytes([_data | BIT_EN | _backlightval]))
    #expanderWrite(_data | BIT_EN)
    time.sleep_us(500)
    i2c1.writeto(LCDI2C_ADDR, bytes([(_data & ~BIT_EN) | _backlightval]))
    #expanderWrite(_data & ~BIT_EN)
    time.sleep_us(500)
    
def command(value):
	SEND(value,0)

def CMD(data=0):
    global PIN_RS
    PIN_RS = False
    SEND(data,0)
    PIN_RS = True

def backlight(on=None):
    global BLACKLIGHT
    if on != None:
        BLACKLIGHT = on
        expanderWrite(0)
        #CMD(0)
    return BLACKLIGHT

def clear():
    command(0x01)

def dispUpdate():
    command(0x08 | (BIT_BLINK if BLINK else 0) | (BIT_CURSOR if CURSOR else 0) | (BIT_DISPLAY if sDISPLAY else 0))

def blink(v=None):
    global BLINK
    if v != None:
        BLINK = v
        dispUpdate()
    return BLINK

def cursor(v=None):
    global CURSOR
    if v != None:
        CURSOR = v
        dispUpdate()
    return CURSOR

def display(v=None):
    global sDISPLAY
    if v != None:
        sDISPLAY = v
        dispUpdate()
    return sDISPLAY

def setup(addr=0x3F, col=20, row=4):
    global LCDI2C_ADDR
    LCDI2C_ADDR = addr
    #for a in ( 0x30, 0x30, 0x30, 0x20 ):
    #    SEND(a,0)
    time.sleep_ms(50)
    write4bits(0x30)
    time.sleep_ms(5)
    write4bits(0x30)
    time.sleep_us(200)
    write4bits(0x30)
    write4bits(0x20)
    command(0x0C)  # Display on, cursor off, blink off
    command(0x06)  # Entry mode set: increment, no shift
    command(0x01)  # Clear display
    time.sleep_ms(2)
    time.sleep_ms(2)
    #CMD(0x20 | 0x08 if row > 1 else 0)
    #dispUpdate()
    #clear()

def setupAuto():
    scan_addr = i2c1.scan()
    addr = None
    if 0x27 in scan_addr:
        addr = 0x27
    if 0x3F in scan_addr:
        addr = 0x3F
    if addr:
        print(addr)
        setup(addr)

def setCursor(line=1, indent=0):
    row_offset = [ 0x00, 0x40, 0x14, 0x54 ]
    rowindex = row_offset[line-1]
    command(LCD_SETDDRAMADDR|(indent + row_offset[rowindex]))

def show(data, line=None, indent=0):
    global PIN_RS
    if line != None:
        setCursor(line, indent)
    PIN_RS = True
    #for d in bytearray(str(data)):
    for char in data:
        SEND(ord(char),BIT_RS)
        #SEND(d&0xF0)
        #SEND((d<<4)&0xF0)
        #print(d)
    #print(data)

def scrollLeft():
    command(0x18)

def scrollRight():
    command(0x1C)
