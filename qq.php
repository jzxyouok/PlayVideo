<?php
	require_once 'source/class/class_core.php';
	$url = $_SERVER['SERVER_NAME'];	
	$discuz = & discuz_core::instance();
	$discuz->init();
	$result = DB::fetch_all("select * from pre_common_member_count where uid = ".$uid);
	include template('common/header');
	$action = $_GET['action'];
	switch ($action) {
		case 'TypeList':
			$TypeList = DB::fetch_all("select * from pre_yuxuan_video_type");
			print_r($TypeList );
			break;
		
		default:
			# code...
			break;
	}

	include template('common/footer');
?>
