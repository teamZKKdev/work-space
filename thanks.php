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
          <h1 class="header_logoText">Sneakers</h1>
        </div>
        <div class="header_hamburger">
          <div class="header_hamburgerLineArea">
            <span class="header_hamburgerLine"></span>
            <span class="header_hamburgerLine"></span>
            <span class="header_hamburgerLine"></span>
          </div>
        </div>
        <nav class="header_menu">
          <ul class="header_menuArea">
            <li class="header_menuItem"><a class="header_menuItemLink" href="#pickUp">PICK UP</a></li>
            <li class="header_menuItem"><a class="header_menuItemLink" href="#feature">FEATURE</a></li>
            <li class="header_menuItem"><a class="header_menuItemLink" href="#contact">CONTACT</a></li>
            <li class="header_menuItem"><a class="header_menuItemLink" href="https://twitter.com/?lang=ja"
                target="_blank" rel="noopener noreferrer">Twitter</a>
            </li>
            <li class="header_menuItem"><a class="header_menuItemLink" href="https://www.facebook.com/?locale=ja_JP"
                target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li class="header_menuItem"><a class="header_menuItemLink" href="https://www.instagram.com/" target="_blank"
                rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </nav>
    </header>
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

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="slick/slick.min.js"></script>
    <script src="js/script.js"></script>
</body>
</html>