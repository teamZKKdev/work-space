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
    <h2 class="title">お問い合わせ内容</h2>
    <div class="confirmation-info">
        <p>お問い合わせ内容はこちらで宜しいでしょうか？<br>
           よろしければ「送信する」ボタンを押して下さい。
        </p>
    </div>

    <div class="confirmation-form">
        <form action="thanks.php" method="post">
            <!-- <table border="1">
                <tr>
                    <td>名前</td>
                    <td><?php echo isset($_POST["username"]) ? htmlspecialchars($_POST["username"]) : "" ?></td>
                </tr>
                <tr>
                    <td>メールアドレス</td>
                    <td><?php echo isset($_POST["useremail"]) ? htmlspecialchars($_POST["useremail"]) : "" ?></td>
                </tr>
                <tr>
                    <td>お問い合わせ内容</td>
                    <td><?php echo isset($_POST["inquiry"]) ? htmlspecialchars($_POST["inquiry"]) : "" ?></td>
                </tr>
            </table> -->

            <div class="data">
                <dl>
                    <dt>名前: </dt>
                    <dd><?php echo isset($_POST["username"]) ? htmlspecialchars($_POST["username"]) : "" ?></dd>
                </dl>
                <dl>
                    <dt>メールアドレス: </dt>
                    <dd><?php echo isset($_POST["useremail"]) ? htmlspecialchars($_POST["useremail"]) : "" ?></dd>
                </dl>
                <dl>
                    <dt>お問い合わせ内容: </dt>
                    <dd><?php echo isset($_POST["inquiry"]) ? htmlspecialchars($_POST["inquiry"]) : "" ?></dd>
                </dl>
            </div>

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