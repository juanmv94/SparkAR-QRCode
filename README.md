# QR Codes for Spark AR ;)
An Spark AR utility block (and sample project) to generate text QR Barcodes dynamically on SparkAR

* **Free to use only for personal ig accounts**
* **Contact @Juanmv94 for help or bussiness use**

## The block
This block dynamically generates a 25x25 text QR code on a plane with provided input text.
Text should be between 8 and 32 characters in order to fit in a 25x25 QR with the best matching QR error correction level. If text is less than 8 characters, it will be padded with spaces, and if it exceeds 32 characters, it will be cropped.

**You must set the following parameters:**
* **Text:** Text that QR will contain (can change dynamically)
* **black:** color for QR black pixels
* **white:** color for QR white pixels and padding
* **padding:** padding size for the QR in plane
* **design:** one of the followings:

### STATIC:
| ID | Description | snapshot |
| ------ | ------ | ------ 
| 0 | Normal QR pixel design | ![](https://raw.githubusercontent.com/juanmv94/SparkAR-QRCode/main/snapshots/0.png) |
| 1 | Circle QR pixel design | ![](https://raw.githubusercontent.com/juanmv94/SparkAR-QRCode/main/snapshots/1.png) |
| 2 | Square QR pixel design | ![](https://raw.githubusercontent.com/juanmv94/SparkAR-QRCode/main/snapshots/2.png) |
| 3 | Rounded square QR pixel design | ![](https://raw.githubusercontent.com/juanmv94/SparkAR-QRCode/main/snapshots/3.png) |
| 4 | Circle border QR pixel design | ![](https://raw.githubusercontent.com/juanmv94/SparkAR-QRCode/main/snapshots/4.png) |
| 5 | Brick Tetris QR pixel design | ![](https://raw.githubusercontent.com/juanmv94/SparkAR-QRCode/main/snapshots/5.png) |
| 6 | Random circle/square QR pixel design | ![](https://raw.githubusercontent.com/juanmv94/SparkAR-QRCode/main/snapshots/6.png) |

### ANIMATED:
| ID | Description | snapshot |
| ------ | ------ | ------ 
| 7 | Waving square sizes | ![](https://raw.githubusercontent.com/juanmv94/SparkAR-QRCode/main/snapshots/7.png) |
| 8 | Random square sizes | ![](https://raw.githubusercontent.com/juanmv94/SparkAR-QRCode/main/snapshots/8.png) |
| 9 | Scanlines simulation | ![](https://raw.githubusercontent.com/juanmv94/SparkAR-QRCode/main/snapshots/9.png) |

## The Sample Project
The sample project containing the QR block, is just a QR block instance connected to the facetracker, and 3 QR texts that changes every 5 seconds for the text input of the block.
You can switch QR block designs by tapping screen.
"Anti-Aliasing" Render Output is used in this project.

## SparkAR review policies
Acording to SparkAR review policy **3.6. External links and tags:** 
Content must not contain tags or links off Facebook, Instagram, Messenger, or Portal.
* **3.6.a. Content must not contain any of the following:**
  * URLs (web addresses)
  * QR codes
  * Other scannable codes
* **3.6.b. However, effects may contain the following:**
  * Social media handles with no call to action
  * URLs which form part of a company name
 
However, it seems that having text QRs in projects is not a problem if QRs doesn't contain URLs (example: https://www.instagram.com/ar/657606241897138/) but it may depend on who reviews your efect.

## QR lib licenses
QR lib used can be found here: https://github.com/defunctzombie/qr.js

This QR library is based on this other one: https://kazuhikoarase.github.io/qrcode-generator/

> Copyright (c) 2013 Roman Shtylman
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


> Copyright (c) 2009 Kazuhiko Arase <kazuhiko.arase@gmail.com>
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
