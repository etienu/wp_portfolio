<!-- カテゴリ -->
<article class="p-widget__cats">
    <div class="p-widget__title">カテゴリ</div>
    <div class="p-widget__cats-items">
        <?php
            $args = array(
                'order' => 'ASC',
                'orderby' => 'order',
                'exclude' => '1'    //除外するカテゴリー名(Uncategorized)
            );
            $categories = get_categories($args);
            //var_dump( $categories );
            foreach($categories as $category):
        ?>
        <a href="<?php echo esc_url( get_category_link($category->term_id) ); ?>">
            <div class="p-widget__cats-item">
                <div class="p-widget__cats-item-text"><?php echo $category->name." ( ".$category->count." )"; ?></div>
            </div>
        </a>
        <?php endforeach; ?>
    </div>
</article>
