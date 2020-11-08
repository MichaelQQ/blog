在看完『[SITCON 2014] 當 PHP 與 Facebook API 相遇 - 聽。風』的talk之後，就一直很想試試#Facebook_API ；剛好，又對網路爬蟲 (#Crawler )非常感興趣，這個Facebook App/Web就誕生了。



不過要爬什麼資料可就傷透腦筋了，一直苦惱於要收集什麼資料，一天，學校的課程教學平台 (CCU #Ecourse )給了我靈感，自從課越修越少後，就越來越少登入教學平台了，也因此常常錯過課程的公告資訊，造成教學課程平台師生間資訊流通效果大打折扣。而#Facebook 可以算是同學之間使用者最多的社群網路了，如果可以讓公告在Facebook裡面產生通知，那資訊的流通程度就改善了許多。



第一步就是先完成#爬蟲 程式了，一開始花了許多時間猶豫要使用何種程式語言實現，當時很想學學#Python ，所以就順便練練Python囉！整個爬蟲程式的從開始到完成其實遇到蠻多關卡的，所以也學到很多實務的知識，例如：

- 透過瀏覽器實際去了解開啟網頁的流程
- 了解HTTP協定的內容
- HTML的解析
- 網頁登入的細節

在完成這部分後，不得不說Python不愧是現在非常流行的程式語言，在寫過C和Java後，真的會發現Python的開發可以專注在程式的邏輯，而且開發速度也可以快上許多，當然C和Java還是有其不可取代性。



第二步就是將爬到的公告往Facebook送的部分了，所以要先研究Facebook API，不過在#SITCON的 影片中已經很清楚地講解API的使用方式，所以這個階段算是摸索得比較快，而且第一次使用Facebook API感覺蠻新鮮得。



最後一步就是需要一個網頁介面讓大家輸入Ecourse的帳號密碼來爬個人的課程公告，並且要找尋可以爬蟲程式的地方，也就是有支援Python的Server，因為懶得自己架Server只好在網路上尋覓機器，最後找上#Google_App_Engine (#GAE )，GAE算是很適合放小巧的程式的地方，設定也蠻容易的。



在這些努力之下，總算是把這個小專案完成，不過思考到要記錄Ecourse帳號密碼這種敏感性的資料，所以就沒有把他完整的放上來了，只剩下模擬Facebook通知的功能可以使用，算是小缺憾。另外，Facebook API提供的通知功能只限於網頁，因此也無法達成最初想要的即時的手機通知。



最後附上CCU Ecourse Notifier給大家玩玩Facebook的通知功能：http://ecourse-notifier.appspot.com/ (已關閉)


<iframe width="100%" height="315" src="https://www.youtube.com/embed/dBS_K0oFxo8" frameborder="0" allowfullscreen></iframe>