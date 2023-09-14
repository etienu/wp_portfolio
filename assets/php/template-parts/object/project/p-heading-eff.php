<?php
/*
<!-- header effect 1 特殊見出し演出 -->
*/
?>
  <?php /* 文字列がないと幅が測れない為 */ ?>
  <?php 
    $c_bg_color = "";
    //  配列に要素"color"があるか
    if( array_key_exists( 'color', $args )){
      //  値はgreenか
      if( strcmp( $args['color'], "green" ) == 0 ){
        $c_bg_color = "c-title__bg__modan--green";
      }
      //echo "args[color]はある";
      //var_dump( $args );
    }
    //  colorがない
    else{
      //echo "args[color]がない";
    }
  ?>
  <h2 class="c-title__modan <?php echo $c_bg_color;?>"><?php echo $args['title'];?></h2>
  <div class="c-title__modan c-title__bg__modan <?php echo $c_bg_color;?>" data-jstype="heading-eff" data-headingtext=<?php echo $args['title'];?>>
    <div class="c-anchor__t-100" id="<?php echo $args['id'];?>"></div>
    <span data-headingparts="base">
      <span data-headingparts="bg"></span>
      <span data-headingparts="boxlu"></span>
      <span data-headingparts="boxrb"></span>
      <span data-headingparts="lead"><?php echo $args['lead'];?></span>
    </span>
  </div>
