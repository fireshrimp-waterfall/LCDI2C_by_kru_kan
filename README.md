this project made for student lerning lessons to control lcdi2c with microblock IDE and ESP32 Dev Board.
in this year i create some teching resources for stuent to studying in class microcontroller with blockprograming by microblock IDE and micropython.
in path to create lesson [control lcd with i2c protocol] i found solution in microblock ide extension name LCDI2C-extension after i download it and install some block cant work and no text showing on lcd display.
after problem i change my disition and copy a repository https://github.com/microBlock-IDE/LCDI2C-extension/tree/master and edit python library referent with oldschool c++ library for arduino ide and repocitoty referrent is made by fdebrabander https://github.com/fdebrabander/Arduino-LiquidCrystal-I2C-library
after edit a library finish i zip a project and isntall to microblock ide then take a block to working place and upload lcd can show text now 
//// this project not finish it only for show text you cant scrolltext and clear
โปรเจ็คนี้สร้ามาเพื่อใช้เป็นสื่อประกอบการเรียนการสอน การเขียนโปแรกรมด้วยรูปแบบบล๊อคโปรแรกมมิ่ง เพื่อควบคุมไมโครคอรโทรลเลอร์ ให้แสดงผลบนหน้าจอแสดงผลชนิด lcd ที่สื่อสารด้วยโปรโตคอล i2c โดยใช้โปรแกรมไมโครบล๊อคไอดีอี สำหรับบอร์ดไมโครคอนโทรลเลอน esp32dev
ในระหว่างการสร้างสื่อการสอนได้พบ extension ที่เป็นตัวช่วยในโปรแกรมไมโครบล๊อคไอดีอี ชื่อ LCDI2C-extension แต่เพมื่อดาวโหลดมาแล้วไม่สามารถทำงานได้ตามที่คาดหวัง ไม่มีการแสดงผลข้อความออกมา สั่งปิดได้เพียงแบลคไลท์
หลังพบปัญหาได่เปลี่ยนการตัดสินใจของตนเอง โดยการดาวโหลดเรโปของ LCDI2C-extension และทำการแก้ไข python ไลบรารี่ โดยอ้างอิงจาก ไลบรารี่เก่าของแพทฟอร์มอาดูโน่ ทีสร้างโดย fdebrabander 
เมื่อเสร็จสิ้นการแก้ไขไพท่อนไลบรารี่ ได้ทำาร zip โปรเจ็ค และติดตั้ง extension ไปที่ ไมโครบล๊อคไอดีอี แล้วนำบล๊อคออกมาแล้วทำการอัพโหลด พบว่ามีตัวหนังสือออกมา
โปรเจ็คนี้สร้างขึ้นมายังไม่เสร็จสมบูรณ์ ทำได้เพียงแสดงผลข้อความเท่านั้น คุณไม่สามารถทำข้อความเลื่อน หรือ สั่งล้างหน้าจอด้วยคำสั่ง clear ได้
