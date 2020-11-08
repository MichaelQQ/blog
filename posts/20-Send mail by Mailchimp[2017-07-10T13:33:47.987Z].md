>Mailchimp : [https://mailchimp.com/](https://mailchimp.com/)
>
>免費用戶
>- 最多可以有2,000訂閱者
>- 每月12,000封電子郵件

記錄一下用#Mailchimp 寄出確認郵件的步驟(html code)
主要分為
1. 建立#Email #Template
2. 匯入user list
3. 建立#campaign
4. 寄出email
---
1. 前往Template建立新的郵件樣板

2. 這裡我們打算自己編輯html，所以選擇Code your own -> Paste in code選項

3. 然後修改成自己的Email#樣板 ，這裡我們只要Demo動態帶入使用者資料的做法，所以只留下一小部分(其中 *|NAME|*, *|PHONE|*和*|ADDRESS|*就是我們等等要動態帶入的部分)
```html
<body leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0">
    <center>
        <table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="backgroundTable">
            <tr>
                <td>姓名</td>
                <td>*|NAME|*</td>
            </tr>
            <tr>
                <td>電話</td>
                <td>*|PHONE|*</td>
            </tr>
            <tr>
                <td>地址</td>
                <td>*|ADDRESS|*</td>
            </tr>
        </table>
    </center>
</body>
```
4. 儲存後，我們就完成樣板的部分了。
---
再來是匯入使用者的資料
1. 建立List

2. 匯入使用者資料 (選擇Add contacts -> import contacts)，可以根據自己的需求選擇用csv匯入或是從.xlsx(Excel)複製貼上，選擇好後按下右下角的Next

3. 貼上從Excel複製的資料後，確認無誤的話會要你設定每個欄位的名稱。不需要的欄位可以選擇skip，需要的欄位可以選擇mailchimp提供的欄位設定或自行設定名稱後Save。

4. 完成匯入後，要設定merge tag的名稱，確保寄出Email時可以動態的在我們的Email Template填入使用者的資料(選擇Settings -> List Fields and *|MERGE|* tages)
將姓名、電話、住址的tag名稱改成我們在email template裡面的*|NAME|*, *|PHONE|*和*|ADDRESS|*後儲存。

---
最後則是寄出郵件的部分，分別是
1. 建立Campaign
2. 選擇要寄出的List
3. 選擇Email Template
4. 預覽結果
建議要預覽一下結果確認資料有被帶入，可以選擇
Preview and Test -> Enter Preview mode -> Enable live merge tag info
5. 寄出郵件

這樣就完成整個流程了！