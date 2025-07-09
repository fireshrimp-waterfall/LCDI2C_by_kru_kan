# โปรเจกต์ควบคุม LCD I2C ด้วย MicroBlock IDE และ ESP32 Dev Board

This project was created as a teaching resource for students learning how to program microcontrollers to display output on an LCD screen using the I2C protocol, specifically with **MicroBlock IDE** and the **ESP32 Dev Board**.

โปรเจกต์นี้จัดทำขึ้นเพื่อเป็นสื่อการสอนสำหรับการเรียนรู้การเขียนโปรแกรมควบคุมไมโครคอนโทรลเลอร์ ESP32 Dev Board เพื่อแสดงผลบนหน้าจอ LCD ที่สื่อสารด้วยโปรโตคอล I2C โดยใช้โปรแกรม MicroBlock IDE

---

## ปัญหาที่พบและการแก้ไข
## Problem Encountered and Solution

During the development of the teaching material, I encountered an extension in MicroBlock IDE called **LCDI2C-extension**. After downloading and installing it, some blocks didn't work as expected, and no text was displayed on the LCD. Only the backlight could be controlled.

After facing this issue, I decided to modify the project. I downloaded the repository of the **LCDI2C-extension** ([https://github.com/microBlock-IDE/LCDI2C-extension/tree/master](https://github.com/microBlock-IDE/LCDI2C-extension/tree/master)) and edited its Python library. The modifications were based on the older C++ library for Arduino IDE by fdebrabander ([https://github.com/fdebrabander/Arduino-LiquidCrystal-I2C-library](https://github.com/fdebrabander/Arduino-LiquidCrystal-I2C-library)).

Once the Python library was edited, I zipped the project and installed the modified extension into MicroBlock IDE. Then, I used the blocks in the workspace and uploaded the code. The LCD was finally able to display text.

ในระหว่างการจัดทำสื่อการสอน ได้ทดลองใช้ extension ชื่อ **LCDI2C-extension** ที่มีอยู่ใน MicroBlock IDE แต่พบว่า extension ดังกล่าวไม่สามารถทำงานได้ตามที่คาดหวัง ไม่มีการแสดงผลข้อความออกทางหน้าจอ LCD ทำได้เพียงแค่ควบคุมไฟ backlight เท่านั้น

หลังจากพบปัญหาดังกล่าว ได้ตัดสินใจแก้ไขโดยการดาวน์โหลด repository ของ **LCDI2C-extension** มาทำการปรับปรุง Python library ภายใน โดยอ้างอิงจากไลบรารี C++ เก่าของ Arduino IDE ที่สร้างโดย fdebrabander: [https://github.com/fdebrabander/Arduino-LiquidCrystal-I2C-library](https://github.com/fdebrabander/Arduino-LiquidCrystal-I2C-library)

เมื่อทำการแก้ไข Python library เรียบร้อยแล้ว ได้ทำการ Zip โปรเจกต์ และติดตั้ง extension ที่แก้ไขแล้วนี้เข้าไปใน MicroBlock IDE จากนั้นจึงทดลองนำบล็อกคำสั่งมาใช้งานและอัปโหลดโค้ดลง ESP32 Dev Board พบว่าหน้าจอ LCD สามารถแสดงข้อความได้สำเร็จ

---

## สถานะปัจจุบันของโปรเจกต์
## Current Project Status

This project is not yet complete. It can only **display text**. You cannot scroll text or clear the display with the current functionality.

โปรเจกต์นี้ยังไม่สมบูรณ์ สามารถทำได้เพียง **แสดงผลข้อความ (show text)** เท่านั้น ยังไม่รองรับฟังก์ชันการทำงานอื่น ๆ เช่น การเลื่อนข้อความ (scroll text) หรือการล้างหน้าจอ (clear display)

## อ้างอิง
## referrent
**fdebrabander lcdi2c**: [https://github.com/fdebrabander/Arduino-LiquidCrystal-I2C-library](https://github.com/fdebrabander/Arduino-LiquidCrystal-I2C-library)
**LCDI2C-extension** ([https://github.com/microBlock-IDE/LCDI2C-extension/tree/master](https://github.com/microBlock-IDE/LCDI2C-extension/tree/master))
