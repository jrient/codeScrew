<?php

namespace src;

class Excel
{
    /**
     * 生成导出的.csv文件
     * Excel打开最大行可达104w, 而 xls文件最大行数为65535
     * @param $filename
     * @param $data
     */
    public function output($filename, $data)
    {
        header('Content-Type: application/vnd.ms-excel');
        header('Content-Disposition: attachment;filename="'.$filename.'.csv"');
        header('Cache-Control: max-age=0');

        $fp = fopen('php://output', 'a');
        foreach ($data as $i => $item) {
            fputcsv($fp, $data);
            if ($i % 1000 === 0) {
                ob_flush();
                flush();
            }
        }
    }
}