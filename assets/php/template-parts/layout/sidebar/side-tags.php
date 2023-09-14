<!-- タグ -->
<article class="p-widget__tags">
    <div class="p-widget__title">タグ</div>
    <div class="p-widget__tags-items">
        <?php
            $tags = get_tags();
            //var_dump( $categories );
            foreach($tags as $tag):
        ?>
        <div class="p-widget__tags-item">
            <a href="<?php echo esc_url( get_tag_link($tag->term_id) ); ?>">
                <div class="p-widget__tags-item-text"><?php echo $tag->name; ?></div>
            </a>
        </div>
        <?php endforeach; ?>
    </div>
</article>
