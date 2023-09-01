<?php
//---------------------------------------------------------
//	header-menu.php
//	トップメニュー部分
//-----------------------------------------------------------
/*
<!-- header
<header id="header" class="header l-header-float">
 -->
 */
?>
	<header id="header" class="l-header">
		<div class="l-header__inner">
            <?php //header_logo(); ?>
			<?php header_menu(); ?>
		</div><!-- /inner -->
		<div class="p-drawer__icon-area">
			<div class="p-drawer__icon">
				<div class="p-drawer__icon__bars">
					<div class="p-drawer__icon__bar1"></div>
					<div class="p-drawer__icon__bar2"></div>
					<div class="p-drawer__icon__bar3"></div>
				</div>					
			</div>
		</div>
	</header><!-- /header -->

	<!--    ドロワーSPメニュー-->
	<div class="p-drawer">
		<div class="p-drawer__content">
		<div class="c-title__heading u-margin__t120">メニュー</div>
			<div class="p-drawer__content__items">
			<?php
				$main_menu = wp_get_nav_menu_items('HeaderMenu', array());
				drawer_menu( $main_menu );
			?>
<!--			
			<ul class="p-drawer__nav-buttons">
				<li>
					<a href="<?php echo esc_url( home_url('/contact' ) ); ?>" class="c-button__wb" id="hbtns-contact">お問い合わせ</a>
				</li>
			</ul>
-->
			</div>
		</div>
		<div class="p-drawer__background"></div>
	</div>

<?php

//----------------------------------------
//		ヘッダー : ロゴ
//----------------------------------------
function header_logo(){
//	<!-- サイト名 -->
echo <<<EOT
	<div class="l-header__logo-wrapper">
EOT;
	//	トップページ:ロゴをh1、それ以外のページではdiv
	if (is_home() || is_front_page() ) :
		echo "<div><a href='".esc_url(home_url('/'))."'>HOME</a></div>";
	else :
		echo "<div><a href='".esc_url(home_url('/'))."'>HOME</a></div>";
	endif;
	echo "</div>";
}


//----------------------------------------
//		ヘッダー : メニュー
//----------------------------------------
function header_menu(){
echo <<<EOT
	<!--　メニュー　-->
	<div class="l-header__nav-wrapper">
		<ul class="l-header__nav">
EOT;
	$main_menu = wp_get_nav_menu_items('HeaderMenu', array());
	$i = 0;
	$sml = array();
	$beforeID = -1;
	$fOpenSubMenu = false;
	foreach($main_menu as $menu) :
		//	menu->ID : このアイテムのID
		//	menu->title : メニュー名
		//	menu->menu_item_parent : このアイテムの親ID
		//	親がない : 一番上のメニュー
		if( $menu->menu_item_parent == 0 ){
			//	最初ではなく、一つ前の親IDがない( 新しいアイテムが始まったので一つ前を閉じる  )
			if( $i != 0 && $beforeParentID == 0 ){
				echo '</li>';
			}
			//	サブメニュー閉じる
			if( $fOpenSubMenu ){
				$fOpenSubMenu = false;
				echo '</ul>';
			}
			echo '<li><a href="'.$menu->url.'" class="l-header__item">'.$menu->title.'</a>';
		}

		//	親がある : サブメニュー
		else{
			//echo '<li><a href="'.$menu->url.'" class="header-item">'.$menu->title.'</a></li>';
			//	一つ前のIDか親IDが親(サブメニューの始まり処理)
			if( $beforeID == $menu->menu_item_parent ){
				echo '<ul class="l-header__item-submenu">';
				echo '<li><a href="'.$menu->url.'" class="l-header__item-submenu-item">'.$menu->title.'</li>';
				$fOpenSubMenu = true;
			}
			//	一つ前の親IDが親(サブメニューのアイテム追加)
			if( $beforeParentID == $menu->menu_item_parent ){
				echo '<li><a href="'.$menu->url.'" class="l-header__item-submenu-item">'.$menu->title.'</li>';
			}
		}
		
		$beforeID = $menu->ID;
		$beforeParentID = $menu->menu_item_parent;
		$i ++;
	endforeach;
	//	サブメニュー閉じる
	if( $fOpenSubMenu ){
		$fOpenSubMenu = false;
		echo '</ul>';
	}
	//	最後のメニューがサブでない場合
	if( 0 < count($main_menu) && $beforeParentID == 0 ){
		echo '</li>';
	}
			
echo <<<EOT
		</ul>
	</div>
EOT;
}


//----------------------------------------
//		ドロワー : メニュー
//----------------------------------------
function drawer_menu( $i_menu ){
	$i = 0;
	$beforeID = -1;
	$beforeParentID = -1;
	foreach($i_menu as $menu) :
		//print_r( "[i]".$i."/".$menu."<br>");
		//	親がない : 一番上のメニュー
		if( $menu->menu_item_parent == 0 ){
			//	最初ではなく、一つ前の親IDがない( 新しいアイテムが始まったので一つ前を閉じる  )
			if( $i != 0 && $beforeParentID == 0 ){
			//	echo '</li>';
			}
			//	サブメニュー閉じる
//			if( $fOpenSubMenu ){
//				$fOpenSubMenu = false;
			//	echo '</ul>';
//			}
			
			//	最後のメニューがサブでない場合
			if( 0 < count($i_menu) && $beforeParentID == 0 ){
			//	echo '</li>';
			}
			echo '<div class="p-drawer__content__item"><a href="'.$menu->url.'" class="c-title__h2 c-title__h2--solid-h2">'.$menu->title.'</a></div>';
			
		}
		$beforeID = $menu->ID;
		$beforeParentID = $menu->menu_item_parent;
		$i ++;
	endforeach;
/*
//		$main_menu = wp_get_nav_menu_items('HeaderMenu', array());
		$i = 0;
		$sml = array();
		$beforeID = -1;
		$fOpenSubMenu = false;
		foreach($main_menu as $menu) :
			//	親がない : 一番上のメニュー
			if( $menu->menu_item_parent == 0 ){
				//	最初ではなく、一つ前の親IDがない( 新しいアイテムが始まったので一つ前を閉じる  )
				if( $i != 0 && $beforeParentID == 0 ){
					echo '</li>';
				}
				//	サブメニュー閉じる
				if( $fOpenSubMenu ){
					$fOpenSubMenu = false;
					echo '</ul>';
				}
				echo '<li><a href="'.$menu->url.'" class="l-header__item">'.$menu->title.'</a>';
			}
			$beforeID = $menu->ID;
			$beforeParentID = $menu->menu_item_parent;
			$i ++;
		endforeach;
		//	サブメニュー閉じる
		if( $fOpenSubMenu ){
			$fOpenSubMenu = false;
			echo '</ul>';
		}
		//	最後のメニューがサブでない場合
		if( 0 < count($main_menu) && $beforeParentID == 0 ){
			echo '</li>';
		}
*/		
}
?>