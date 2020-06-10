<?php
include('../inc/header.php');
?>

<h2>Exercice 9</h2>
<p>Calculatrice</p>

<div id="calculator">
<form  name="calculatrice" action="" onSubmit="resultat();return false;">
    <input class="affiche" id="affiche" type="text" autocomplete="off" name="affiche" value="">


<table>
    <tr>
        <td><input type="button" class="button" value="(" onClick="ajouter('(')"></td>
        <td><input type="button" class="button" value=")" onClick="ajouter(')')"></td>
        <td><input type="button" class="button" value="%" onClick="ajouter('%')"></td>
        <td><input type="reset" class="button" value="AC"></td>
    </tr>
    <tr>
        <td><input type="button" class="button" value="7" onClick="ajouter('7')"></td>
        <td><input type="button" class="button" value="8" onClick="ajouter('8')"></td>
        <td><input type="button" class="button" value="9" onClick="ajouter('9')"></td>
        <td><input type="button" class="button" value="/" onClick="ajouter('/')"></td>
    </tr>
    <tr>
        <td><input type="button" class="button" value="4" onClick="ajouter('4')"></td>
        <td><input type="button" class="button" value="5" onClick="ajouter('5')"></td>
        <td><input type="button" class="button" value="6" onClick="ajouter('6')"></td>
        <td><input type="button" class="button" value="*" onClick="ajouter('*')"></td>
    </tr>
    <tr>
        <td><input type="button" class="button" value="1" onClick="ajouter('1')"></td>
        <td><input type="button" class="button" value="2" onClick="ajouter('2')"></td>
        <td><input type="button" class="button" value="3" onClick="ajouter('3')"></td>
        <td><input type="button" class="button" value="-" onClick="ajouter('-')"></td>
    </tr>
    <tr>
        <td><input type="button" class="button" value="0" onClick="ajouter('0')"></td>
        <td><input type="button" class="button" value="." onClick="ajouter('.')"></td>
        <td><input type="button" class="button" value="=" onClick="resultat('=')"></td>
        <td><input type="button" class="button" value="+" onClick="ajouter('+')"></td>
    </tr>
</table>
</form>
</div>




<footer>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script
        src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
        integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="
        crossorigin="anonymous">

    </script>


    <script src="../asset/js/exo9.js">
    </script>

    </body>
    </html>
</footer>