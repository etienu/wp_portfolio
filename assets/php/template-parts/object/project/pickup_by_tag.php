<!-- pickup -->
<div id="pickup">
    <div class="inner">

        <div class="pickup-items">
        <!--
            ・pickupというタグがついた投稿のうち
            ・新しい順に
            ・3件を表示
        -->
        <?php
            $arr = array(
                'posts_per_page' => 3, // 表示する件数
                'orderby' => 'date', // 日付でソート
                'order' => 'DESC', // DESCで最新から表示、ASCで最古から表示
                'tag'   => 'pickup' // 表示したいタグのスラッグ
            );
            //  指定の条件から投稿リストを取得
            //  ※どこか分らないが$postsという変数名が使われているようで
            //      その名だと別の場所のPHPが崩れてエラーだらけになる。
            $ret = get_posts( $arr );
            //  投稿が存在した場合
            if( $ret ):
            foreach( $ret as $p ) :
                //  セットするとこの投稿がサブクエリ？となり、idの指定はいらなくなるようだけど
                //  id指定なら指定で問題ないと思う、このどっちが一般的にスマートと思われるのか問題
                setup_postdata( $p );
                $id = $post->ID;
        ?>

        <a href="<?php echo esc_url( get_permalink( $id ) );?>" class="pickup-item">
            <div class="pickup-item-img">
            <?php
            if( has_post_thumbnail( $id ) ){
                echo get_the_post_thumbnail( $id, 'large' );    
            } else{
                echo '<img src="' .esc_url( get_template_directory_uri() ) . '/img/noimg.png" alt="">';
            }
            ?>
            <div class="pickup-item-tag"><?php my_the_post_category( false, $id ); ?></div>
            </div>
            <div class="pickup-item-body">
                <h2 class="pickup-item-title"><?php echo esc_html( get_the_title( $id ) ); ?></h2>
            </div>
        </a>
        <?php
            endforeach;
            endif;
            //  セットしたら解除が必要
            wp_reset_postdata();
        ?>

        </div><!-- /pickup-items -->

    </div><!-- /inner -->
</div><!-- /pickup -->
