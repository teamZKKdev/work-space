<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>送信ありがとうございます</title>
</head>
<body>
    <section id="thanks">
        <form action="index.html" method="post">
            <h2>お問い合わせ送信完了</h2>

            <p class="message">
                お問い合わせありがとうございます。1営業日以内にご返信させていただきます。
            </p>
            
            <button type="submit" name="topback">TOPへ戻る</button>
            <!--topへ戻るボタンを押すと入力していた値を消してtopへ戻る処理-->
            <?php
                if(isset($_POST["topback"])){
                    $_POST["username"] = "";
                    $_POST["useremail"] = "";
                    $_POST["inquiry"] = "";
                    header("Location: index.html");
                    exit();
                }
            ?>
        </form>
    </section>
</body>
</html>