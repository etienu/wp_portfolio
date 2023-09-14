<?php if (paginate_links() ) : //ページが1ページ以上あれば以下を表示 ?>

<!-- pagenation -->
<div class="p-pagenation">

    <?php
    $arg = array(
        'end_size' => 0,    // ページ番号のリストの両端(最初と最後)にいくつの数字を表示するか
        'mid_size' => 1,    //現在のページの両側にいくつの数字を表示するか(現在のページは含まない)
        'prev_next' => true,    //  リストの中に「前へ」「次へ」のリンクを含むかどうか
        'prev_text' => '<i class="fas fa-angle-left"></i>',     //  前のページへのリンクとして表示する文言(prev_next引数がtrueの場合に有効)
        'next_text' => '<i class="fas fa-angle-right"></i>',    //  次ページへのリンクとして表示する文言(prev_next引数がtrueの場合に有効)
    );
    echo paginate_links( $arg );
    ?>
</div><!-- /pagenation -->

<?php endif; ?>