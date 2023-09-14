<?php
site_settings_page();

//サイト設定ページ内容
function site_settings_page() {
?>
<div class="wrap">
    <h2><b>機能</b></h2>
    <h3>記事閲覧数リセット</h3>
    <button id="my-wp-setting-viewreset">リセットする</button>

<?php
    //  カスタム投稿タイプ、カテゴリwordpress,lpの表示
    $my_args = array(
        'post_type' => 'work',
        'posts_per_page' => 9,
        'order' => 'DESC',
        'orderby' => 'meta_value',
        //  タクソノミーの指定
        'tax_query' => array(
            array(
                'taxonomy' => 'work-category',
                'field' => 'slug',
                'terms' => array('wordpress','lp')
            ),
        ),
        // カスタムフィールドの指定( ソート番号の昇順、値がない物は排除される )
        'meta_query' => array(
            array(
                'key' => 'work_num_sortindex', // フィールド名の指定
                'type'=>'SIGNED' // 値の型
            )
        )
    );
?>
<?php $my_query = new WP_Query($my_args);
    $txt_cnt = 0;
    while ($my_query->have_posts()) :
        $my_query->the_post();
        $pst = $my_query->get_post();
        //var_dump( $my_query["query"] );
        //echo "<br>";
        //$post_obj = get_queried_object();
        $num_view_cnt = get_post_meta(get_the_ID(), 'views', true);
        $num_ev_cnt = get_post_meta(get_the_ID(), 'external_viewers', true);
        if( !$num_ev_cnt ) $num_ev_cnt = 0;
        $txt_cnt ++;
?>
<!-- <table class="form-table setting-table"> -->
<table class="setting-table">
	<tr>
		<th colspan="1" width="40"><label for="label"><?php echo $txt_cnt; ?></label></th>
		<td colspan="1" width="200"><label for="pagename"><?php the_title();?></label></td>
		<td colspan="2" width="300"><label for="viewcount"> : [id]<?php echo get_the_ID(); ?> : [view/閲覧数] <?php echo $num_view_cnt;?> : [external/外部閲覧数] <?php echo $num_ev_cnt;?></label></td>
	</tr>
</table>
<?php
    endwhile;
    wp_reset_postdata();
?>
<br>
記事にカウントされている閲覧数を0にします。
<br>
<br>
<?php
}
?>