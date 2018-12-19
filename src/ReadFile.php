<?php
/**
 * Created by PhpStorm.
 * User: jianfeng
 * Date: 2018/12/19
 * Time: 18:20
 */

namespace src;

class ReadFile
{
    public function readEndLine($logFile, $line=10)
    {
        $data = array();
        if (is_file($logFile)) {
            $fp = fopen($logFile, "r");
            $pos = -2;
            $t = " ";
            $data = array();
            while ($line > 0) {
                while ($t != "\n") {
                    fseek($fp, $pos, SEEK_END);
                    $t = fgetc($fp);
                    $pos --;
                }
                $t = " ";
                $data[]= fgets($fp);
                $line --;
            }
            fclose ($fp);
        }
        return $data;
    }
}