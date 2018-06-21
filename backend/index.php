<?php
header('Content-Type: application/json');
$table = $_REQUEST['table'];

$fp = fopen('new.csv', 'w');
foreach ($table as $row) {
    fputcsv($fp, $row);
}
fclose($fp);

$ret = array('msg' => 'CSVが保存されました', 'table' => $table);
echo json_encode($ret);
