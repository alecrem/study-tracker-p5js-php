<?php
header('Content-Type: application/json');
$table = $_POST['table'];

if(!$table) {
	$ret = array('msg' => 'CSVが保存できませんでした');
	echo json_encode($ret);
	return $ret;
}

$fp = fopen('new.csv', 'w');
foreach ($table as $row) {
    fputcsv($fp, $row);
}
fclose($fp);

$ret = array('msg' => 'CSVが保存されました', 'table' => $table);
echo json_encode($ret);
