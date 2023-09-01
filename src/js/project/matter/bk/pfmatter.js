//wppath : ワードプレスのパス、php内で出力している変数
//console.log("[wppath]" + wppath);
window.onload = function() {
    //Matter.js モジュール 初期設定
    var Engine = Matter.Engine, //物理シュミレーションおよびレンダリングを管理するコントローラーとなるメソッド
        Render = Matter.Render,
        Runner = Matter.Runner,
        Bodies = Matter.Bodies, //一般的な剛体モデルを作成するメソッドを含む
        Composite = Matter.Composite,
        World = Matter.World, //物理演算領域の作成・操作するメソッドを含む
        Mouse = Matter.Mouse,
        Body = Matter.Body, //剛体のモデルを作成・操作するメソッドを含む
        Constraint = Matter.Constraint, //制約を作成・操作するメソッドを含む
        Composites = Matter.Composites,
        Common = Matter.Common,
        Vertices = Matter.Vertices, //頂点のセットを作成・操作するメソッドを含む
        MouseConstraint = Matter.MouseConstraint; //マウスの制約を作成するためのメソッドが含む
    // Matter.jsのEngineを作成
    //  ページ内のセットしたいclassを指定
    var container = document.getElementById('jspfe__canvas-container');
    //    console.log("[psmatter]", container);

    // Matter.js エンジン作成
    var engine = Engine.create();
    var canvas = document.getElementById('jspfe__canvas');
    // create a renderer
    var render = Render.create({
        element: container,
        canvas: canvas,
        engine: engine,
        options: {
            width: 640, // 320
            height: 480, //400,
            wireframes: false,
            pixelRatio: 1,
            background: 'rgba(0,0,0,0)' //, //'#fafafa',
                //            wireframeBackground: '#222'
        }
    });

    // マウス操作を追加
    var canvasMouse = Mouse.create(container);
    var mouseConstraint = MouseConstraint.create(engine, { mouse: canvasMouse });
    World.add(engine.world, mouseConstraint);

    //----------------------------------------
    // yoyo
    //----------------------------------------
    // vertex path
    // (x200,y300)が基準
    //    var vp_yoyo = Vertices.fromPath('40 0 40 20 100 20 100 80 40 80 40 100 0 50');
    //var vp_yoyo = Vertices.fromPath('21 240 15 90 20 43 42 13 92 6 129 29 154 98 158 134 195 144 246 164 269 153 299 105 303 62 323 49 354 68 351 103 316 175 310 202 288 240');
    //  三つに分割
    var vp_yoyo = Vertices.fromPath('21 240 15 90 20 43 42 13 92 6 129 29 154 98 158 134 148 240 ');
    var vp_yoyo2 = Vertices.fromPath('148 240 195 144 246 164 339 153 339 240');
    var vp_yoyo3 = Vertices.fromPath('269 240 299 105 303 62 323 49 354 68 351 103 316 175 310 202 288 240');
    var vp_yoyoh = Vertices.hull(vp_yoyo);
    // vartex
    var v_yoyo = Bodies.fromVertices(x, y, Common.choose([vp_yoyo]), {
        isStatic: true,
        collisionFilter: {
            category: 0x0001 // 画像を判定カテゴリ2とする
        },
        render: {
            fillStyle: '#000',
            strokeStyle: '#000',
            lineWidth: 1,
            sprite: { //スプライトの設定
                texture: wppath + '/img/jsmatter/matter_yoyo.png'
            }
        }
    }, true);
    //  画像のワイヤーフレーム確認用
    var tyoyo = Bodies.rectangle(100, 200, 60, 60, { isStatic: true });

    var b_yoyo = Bodies.rectangle(320, 460, 640, 20, {
        isStatic: true,
        render: {
            fillStyle: 'rgba(180, 120, 0, 0)', // 塗りつぶす色: CSSの記述法で指定
            strokeStyle: 'rgba(0, 0, 0, 0)', // 線の色: CSSの記述法で指定
            lineWidth: 0
        }
    });
    //  コンポジットスタックでないとちゃんと入らない？？？
    var stack = Composites.stack(200, 300, 1, 1, 1, 1, function(x, y) {
        //  choose : ランダム選択
        var color = '#f19648'; //Common.choose(['#f19648', '#f5d259', '#f55a3c', '#063e7b', '#ececd1']);
        return Bodies.fromVertices(x, y, [vp_yoyo], {
            isStatic: true,
            collisionFilter: {
                category: 0x0002 // 画像を判定カテゴリ2とする
            },
            render: {
                fillStyle: color,
                strokeStyle: color,
                lineWidth: 1,
                //スプライトの設定
                sprite: { texture: wppath + '/img/jsmatter/matter_yoyo.png' }
            }
        }, true);
    });
    var syoyo_w = Composites.stack(00, 00, 1, 1, 1, 1, function(x, y) {
        var color = '#f19648';
        return Bodies.fromVertices(x, y, [vp_yoyo, vp_yoyo2, vp_yoyo3], {
            isStatic: true,
            render: {
                //                fillStyle: color,
                //strokeStyle: color,
                lineWidth: 2
            }
        }, true);
    });

    //    Composite.add(engine.world, [v_yoyo]);
    //    World.add(engine.world, v_yoyo);
    World.add(engine.world, [tyoyo]);
    //Composite.add(engine.world, v_yoyo);

    Composite.add(engine.world, stack);
    //    Composite.add(engine.world, syoyo_w);
    // コンポジットで追加する事によって一つの固まりとみなす
    var fvx = 180;
    var fvy = 420;
    var fv_y = Bodies.fromVertices(fvx, fvy, vp_yoyo, { isStatic: true, render: { fillStyle: 'rgba(0, 0, 0, 1)' } });
    var fv_y2 = Bodies.fromVertices(fvx + 97, fvy + 67, vp_yoyo2, { isStatic: true, render: { fillStyle: 'rgba(0, 0, 0, 1)' } });
    var fv_y3 = Bodies.fromVertices(fvx + 97 + 125, fvy + 6, vp_yoyo3, { isStatic: true, render: { fillStyle: 'rgba(0, 0, 0, 1)' } });
    Composite.add(engine.world, [fv_y, fv_y2, fv_y3]);

    //----------------------------------------
    //  マップ
    //床を作る
    var ground = Bodies.rectangle(320, 460, 640, 20, {
        isStatic: true,
        collisionFilter: {
            category: 0x0001
        },
        render: {
            //            fillStyle: '#977559', // 塗りつぶす色: CSSの記述法で指定
            fillStyle: 'rgba(180, 120, 0, 0)', // 塗りつぶす色: CSSの記述法で指定
            strokeStyle: 'rgba(0, 0, 0, 0)', // 線の色: CSSの記述法で指定
            lineWidth: 0
        }
    });
    var groundL = Bodies.rectangle(30, 200, 60, 400, { isStatic: true });
    var groundR = Bodies.rectangle(640 - 30, 200, 60, 400, { isStatic: true });
    // add bodies
    // コンポジットで追加する事によって一つの固まりとみなす
    Composite.add(engine.world, [ground, groundL, groundR]);
    //World.add(engine.world, [ground, groundL, groundR]);


    /*
        //isStatic:地面を追加と壁を追加、静的(完全固定)
        var ground = Bodies.rectangle(160, 350, 320, 60, { isStatic: true });
        var groundA = Bodies.rectangle(30, 200, 60, 400, { isStatic: true });
        var groundB = Bodies.rectangle(290, 200, 60, 400, { isStatic: true });
        // 円追加
        for (var i = 0; i < 10; i++) { //1000個の要素円を追加
            var rnd = parseInt(Math.random() * 10);
            var x = 20 + (i % 80) * 2;
            var y = 0 - (i / 80) * 2;
            World.add(engine.world, [Bodies.circle(x, y, 5, {
                density: 0.001, // 密度: 単位面積あたりの質量
                restitution: 0.7, // 弾力性
                friction: 0.2, // 本体の摩擦
            })]);
        }
        World.add(engine.world, [ground, groundA, groundB, {
            restitution: 0.7, // 弾力性
            friction: 0.2, // 本体の摩擦
        }]);　 //以下は処理速度計測用
        var i = 0;
        var timer = 0.0;
        var start = 0.0;
        var end = 0.0;
        //フレーム毎に実行
        Matter.Events.on(engine, 'beforeUpdate', function() {
            //console.time("loop time");
            start = performance.now();
            i += 1;
        });
        Matter.Events.on(engine, 'afterUpdate', function() {
            //console.timeEnd("loop time");
            end = performance.now();
            timer += end - start
                //        console.log(end - start);
                //        console.log(i);
            if (i > 1000) {
                Matter.Events.off(engine)
                Engine.clear(engine);
                console.log("平均処理時間:", timer / 1000);
            }
        });
    */
    //----------------------------------------
    //物体を追加する
    for (var i = 0; i < 10; i++) {
        var rnd = parseInt(Math.random() * 10);
        var x = 320 + rnd * 10;
        var y = 0 - rnd * 120;
        rnd2 = parseInt(Math.random() * 640);
        var x2 = rnd2;
        var y2 = 0 - rnd2 * 2;

        World.add(engine.world, [
            Bodies.circle(x, y, 20, { //ボールを追加
                density: 0.0005, // 密度: 単位面積あたりの質量
                frictionAir: 0.06, // 空気抵抗(空気摩擦)
                restitution: 1, // 弾力性
                friction: 0.01, // 本体の摩擦
                collisionFilter: {
                    mask: 0x0001 //  カテゴリ1としか判定しない
                },
                render: { //ボールのレンダリングの設定
                },
                timeScale: 1.5 //時間の倍率を設定(1で1倍速)
            })
            /*,
                        Bodies.rectangle(x2, y2, 200, 100, { //長方形を追加する
                            collisionFilter: {
                                mask: 0x0001
                            },
                            render: {
                                sprite: { //スプライトの設定
                                    texture: wppath + '/img/jsmatter/yoyo.png'
                                }
                            }
                        })*/
        ]);

    }
    // エンジン起動
    //    Engine.run(engine);
    // run the renderer
    Render.run(render);
    // create runner
    var runner = Runner.create();
    // run the engine
    Runner.run(runner, engine);

}