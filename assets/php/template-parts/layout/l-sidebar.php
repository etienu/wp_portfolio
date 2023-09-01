<?php
//  サイドバーウィジェット
?>
<aside class="p-sidebar">
<?php
/*
//  get_template_part('sidebar/side-news')
    get_template_part('sidebar/side-search')
//  get_template_part('sidebar/side-category')
    get_template_part('sidebar/side-tags')
    get_template_part('sidebar/side-profile')
*/
    include (dirname(__FILE__) ."/sidebar/side-search.php");
    include (dirname(__FILE__) ."/sidebar/side-tags.php");
    include (dirname(__FILE__) ."/sidebar/side-profile.php");
?>
    <div class="eeTOC__side u-hidden__sp-tab2"></div>
</aside>

