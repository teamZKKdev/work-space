<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>送信ありがとうございます</title>
    <link rel="icon" href="./img/favicon.ico">
    <link rel="stylesheet" href="slick/slick.css">
    <link rel="stylesheet" href="slick/slick-theme.css">
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <header class="header">
        <div class="header_logo">
            <h1><a href="../index.html" class="header_logoText">Sneakers</a></h1>
        </div>
        <nav class="header_fixMenu">
            <ul class="header_fixMenuArea">
                <li class="header_fixMenuItem"><a class="header_fixMenuItemLink" href="https://twitter.com/?lang=ja"
                    target="_blank" rel="noopener noreferrer"><img class="header_menuItemImg" src="../img/X.png" alt="X"></a>
                </li>
                <li class="header_fixMenuItem"><a class="header_fixMenuItemLink" href="https://www.facebook.com/?locale=ja_JP"
                    target="_blank" rel="noopener noreferrer"><img class="header_menuItemImg" src="../img/facebook.png" alt="Facebook"></a></li>
                <li class="header_fixMenuItem"><a class="header_fixMenuItemLink" href="https://www.instagram.com/" target="_blank"
                    rel="noopener noreferrer"><img class="header_menuItemImg" src="../img/instagram.png" alt="Instagram"></a></li>
            </ul>
        </nav>
    </header>
    <section id="thanks">
        <form action="index.html" method="post">
            <div class="mask-bg anim">
                <div class="thanks-form">
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
                </div>
            </div>
        </form>
    </section>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="slick/slick.min.js"></script>
    <script src="js/script.js"></script>
</body>
</html>