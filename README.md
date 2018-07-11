# oh-autoVal

Oh-autoVal
Version 1.0.14
Developed by Amal K Jose
Published on 18th October, 2017

Oh-autoVal is a free Form validation API based on jQuery. It is developed by Amal K Jose as part of project work. The first version of Oh-autoVal v1.0.0 was released on 17th October, 2017. Now it is in a developing stage. And so, there may have more frequent updates.

Steps to implement API to your forms


1. Include following lines to your website.<br>
&lt;-- Adding oh-autoVal css style --&gt;<br>
&lt;link rel="stylesheet" type="text/css" href="https://rawgit.com/ozonhub/oh-autoVal/master/css/oh-autoval-style.css"&gt;<br>
&lt;!-- Adding jQuery script. It must be before other script files --&gt;<br>
&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js" &gt; &lt;/script &gt; <br>
&lt;!-- Adding oh-autoVal script file --&gt;<br>
&lt;script src="https://rawgit.com/ozonhub/oh-autoVal/master/js/oh-autoval-script.js" &gt; &lt;/script &gt;<br>

2. Add a Form with onsubmit="return" and class="oh-autoval-form".<br>
Example:<br>
&lt;form action="destignaion.php" class="oh-autoval-form" method="post" onsubmit="return"&gt;<br>
      &lt;!--Form elements --&gt;<br>
&lt;/form&gt;<br>

3. Add all required elements with class="av-format" and av-message="Error message".<br>
Example:<br>
&lt;input type="text" name="email" class="av-email" av-message="Invalid email address"/&gt;<br>

4. Add a submit button on your form.<br>
Example:<br>
&lt;input type="submit" name="submit" value="Submit"/&gt;<br>

Visit http://www.oh-autoval.ml
