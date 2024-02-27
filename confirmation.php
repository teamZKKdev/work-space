<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>確認</title>
</head>
<body>
<section id="confirmation">
    <h1 class="title">お問い合わせ内容</h1>
    <div class="confirmation-info">
        <p>お問い合わせ内容はこちらで宜しいでしょうか？<br>
           よろしければ「送信する」ボタンを押して下さい。
        </p>
    </div>

    <div class="confirmation-form">
        <form action="thanks.php" method="post">
            <div class="contact-group">
                <ul class="contact-list">
                    <li><h5>Name: </h5></li>
                    <li><?php echo isset($_POST["username"]) ? htmlspecialchars($_POST["username"]) : "" ?></li>
                </ul>
                <ul class="contact-list">
                    <li><h5>Mail: </h5></li>
                    <li><?php echo isset($_POST["useremail"]) ? htmlspecialchars($_POST["useremail"]) : "" ?></li>
                </ul>
                <ul class="contact-list">
                    <li><h5>Message: </h5></li>
                    <li><?php echo isset($_POST["inquiry"]) ? nl2br(htmlspecialchars($_POST["inquiry"])) : "" ?></li>
                </ul>
            </div>

            <!-- <div class="data">
                <dl>
                    <dt>Name: </dt>
                    <dd><?php echo isset($_POST["username"]) ? htmlspecialchars($_POST["username"]) : "" ?></dd>
                </dl>
                <dl>
                    <dt>Mail: </dt>
                    <dd><?php echo isset($_POST["useremail"]) ? htmlspecialchars($_POST["useremail"]) : "" ?></dd>
                </dl>
                <dl>
                    <dt>Message: </dt>
                    <dd><?php echo isset($_POST["inquiry"]) ? htmlspecialchars($_POST["inquiry"]) : "" ?></dd>
                </dl>
            </div> -->

            <div class="submit">
                <!--戻るを押すと前の画面に遷移-->
                <button type="button" onclick="history.back(-1)">戻る</button><button>送信</button>
            </div>

            <!-- <input type="submit" value="送信" /> -->
        </form>
    </div>
</section>
</body>
</html>