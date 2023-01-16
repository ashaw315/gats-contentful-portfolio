import React, { useRef, useEffect } from "react";
import Matter from "matter-js";

function MatterMobile() {
    const bodyRef =  useRef(null)
    // const canvasRef = useRef(null)
    // const [width, setWidth] = useState('')
    // const [height, setHeight] = useState('')
    // const [canvasId, setCanvasId] = useState("pl-"+Math.random().toString().slice(15))

    //***** grabbed from example code *****//
    //   try {
    //     if (typeof MatterWrap !== 'undefined') {
    //         // either use by name from plugin registry (Browser global)
    //         Matter.use('matter-wrap');
    //     } else {
    //         // or require and use the plugin directly (Node.js, Webpack etc.)
    //         Matter.use(require('matter-wrap'));
    //     }
    // } catch (e) {
    //     // could not require the plugin or install needed
    // }

useEffect(() => {

        //   if(typeof window !== 'undefined') {
        //     let loaderBounds = bodyRef.current.parentElement.getBoundingClientRect()
        //     console.log(loaderBounds)
        //     setWidth(loaderBounds.width)
        //     setHeight(loaderBounds.height)
        //     canvasRef.current = document.getElementById(canvasId);
        //   }

    const sectionTag = document.querySelector("section.shapes-mobile");
    let w = window.innerWidth
    let h = window.innerHeight

    const { Engine, Render, Runner, Bodies, Events, Common, Vertices, Composite, Mouse, MouseConstraint } = Matter;
    

    Common.setDecomp(require('poly-decomp'));

    const width = w;
    const height = h;
    const columns = 20;
    // margin to allocate buckets underneath the grid
    const margin = 100;
    // padding to include make space for two rectangles at either side of the canvas
    const padding = width / columns / 2;

    let engine = Engine.create();
    const world = engine.world;
    
    const render = Render.create({
        element: sectionTag,
        engine,
        // set a background slightly lighter than the body's own background
        options: {
            width: w,
            height: h,
            wireframes: false,
            background: '#ffffff',
        },
        });
   
    Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

    engine.gravity.y = 0;

    const colors = [48, 215, 5, 355, 109, 55, 190, 260, 337, 360, 230];
    // 355, 109, 55, 190, 260, 337, 360, 230
    const color = colors[Math.floor(Math.random()*colors.length)];
    const color1 = colors[Math.floor(Math.random()*colors.length)];
    const color2 = colors[Math.floor(Math.random()*colors.length)];
    const color3 = colors[Math.floor(Math.random()*colors.length)];
    const color4 = colors[Math.floor(Math.random()*colors.length)];
    const color5 = colors[Math.floor(Math.random()*colors.length)];
    const color6 = colors[Math.floor(Math.random()*colors.length)];
    const color7 = colors[Math.floor(Math.random()*colors.length)];
    const fillStyle = `hsl(${color}, 90%, 50%)`;
    const fillStyle1 = `hsl(${color1}, 90%, 50%)`;
    const fillStyle2 = `hsl(${color2}, 90%, 50%)`;
    const fillStyle3 = `hsl(${color3}, 90%, 50%)`;
    const fillStyle4 = `hsl(${color4}, 90%, 50%)`;
    const fillStyle5 = `hsl(${color5}, 90%, 50%)`;
    const fillStyle6 = `hsl(${color6}, 90%, 50%)`;
    const fillStyle7 = `hsl(${color7}, 90%, 50%)`;

    // Add name letters at bottom of canvas
    const letterA = Vertices.fromPath('155.27 110.34 163.34 110.34 174.73 140.34 166.3 140.34 164.35 135.05 153.68 135.05 151.92 140.34 143.89 140.34');
    const letterA2 = Vertices.fromPath('155.27 110.34 163.34 110.34 174.73 140.34 166.3 140.34 164.35 135.05 153.68 135.05 151.92 140.34 143.89 140.34');
    const letterA3 = Vertices.fromPath('155.27 110.34 163.34 110.34 174.73 140.34 166.3 140.34 164.35 135.05 153.68 135.05 151.92 140.34 143.89 140.34');
    const letterD = Vertices.fromPath('175.66 110.34 196 110.34 201.96 116.3 201.96 134.39 196 140.34 175.66 140.34');
    const letterM = Vertices.fromPath('132.96 144.72 141.03 144.72 148.93 159.9 156.78 144.72 164.85 144.72 164.85 174.72 156.91 174.72 156.91 157.74 150.3 170.49 147.16 170.49 140.55 157.74 140.55 174.72 132.96 174.72');
    const letterS = Vertices.fromPath('5.87 0 22.32 0 26.78 4.46 21.35 9.88 18.35 6.88 9.88 6.88 8.73 8.03 8.73 10.46 9.44 11.16 22.5 11.91 27.13 16.54 27.13 24.93 22.06 30 4.63 30 0 25.37 5.43 19.94 8.6 23.12 18.04 23.12 19.19 21.97 19.19 19.5 18.49 18.79 5.43 18.04 0.79 13.41 0.79 5.07');
    const letterH = Vertices.fromPath('158.2 141.27 166.14 141.27 166.14 152.52 176.64 152.52 176.64 141.27 184.58 141.27 184.58 171.27 176.64 171.27 176.64 159.58 166.14 159.58 166.14 171.27 158.2 171.27');
    const letterW = Vertices.fromPath('132.17 106.17 140.34 106.17 144.48 124.48 149.16 106.17 155.34 106.17 160.01 124.48 164.16 106.17 171.97 106.17 164.34 136.17 156.7 136.17 152.11 118.22 147.53 136.17 138.81 136.17');

    const aScale = Vertices.scale(letterA, width/100 * 0.2, width/100* 0.2)
    const a2Scale = Vertices.scale(letterA2, width/100* 0.2, width/100* 0.2)
    const a3Scale = Vertices.scale(letterA3, width/100* 0.2, width/100* 0.2)
    const dScale = Vertices.scale(letterD, width/100* 0.2, width/100* 0.2)
    const mScale = Vertices.scale(letterM, width/100* 0.2, width/100* 0.2)
    const sScale = Vertices.scale(letterS, width/100* 0.2, width/100* 0.2)
    const hScale = Vertices.scale(letterH, width/100* 0.2, width/100* 0.2)
    const wScale = Vertices.scale(letterW, width/100* 0.2, width/100* 0.2)

    // Add TOP "Adam Shaw" to canvas, add force to start particle bounce effect // 
    const speedForce = w/100 * 0.0008;

    const renderAtop = Bodies.fromVertices(width/12, 100, aScale, {
        isSleeping: false,
            friction:0.0001,
            restitution: 1,
            density:0.001,
            frictionAir: 0.0001,
            inverseInertia: 0,
                force: {
                    y: speedForce
             },
             render: {
                fillStyle: fillStyle,
                strokeStyle: fillStyle,
                lineWidth: 1,
             }, 
        label: 'plinko'
    }, 
    true);
    Composite.add(world, renderAtop)
    console.log('margin',margin)

    const renderDtop = Bodies.fromVertices(width/5.5, 100, dScale, {
        isSleeping: false,
            friction:0.0001,
            restitution: 1,
            density:0.001,
            frictionAir: 0.0001,
            inverseInertia: 0,
                force: {
                    y: speedForce + 0.0017
             },
             render: {
                fillStyle: fillStyle1,
                strokeStyle: fillStyle1,
                lineWidth: 1,
             }, 
        label: 'plinko'
    }, 
    true);

    Composite.add(world, renderDtop)

    const renderA2top = Bodies.fromVertices(width/3.5, 100, a2Scale, {
            isSleeping: false,
            friction:0.0001,
            restitution: 1,
            density:0.001,
            frictionAir: 0.0001,
            inverseInertia: 0,
                force: {
                    y: speedForce
             },
             render: {
                fillStyle: fillStyle2,
                strokeStyle: fillStyle2,
                lineWidth: 1,
             }, 
        label: 'plinko'
    }, 
    true);

    Composite.add(world, renderA2top)

    const renderMtop = Bodies.fromVertices(width/2.5, 100, mScale, {
        isSleeping: false,
            friction:0.0001,
            restitution: 1,
            density:0.001,
            frictionAir: 0.0001,
            inverseInertia: 0,
                force: {
                    y: speedForce + 0.0015
             },
             render: {
                fillStyle: fillStyle3,
                strokeStyle: fillStyle3,
                lineWidth: 1,
             }, 
        label: 'plinko'
    }, 
    true);

    Composite.add(world, renderMtop)

    const renderStop = Bodies.fromVertices(width/2 + width * 0.1, 100, sScale, {
        isSleeping: false,
            friction:0.0001,
            restitution: 1,
            density:0.001,
            frictionAir: 0.0001,
            inverseInertia: 0,
                force: {
                    y: speedForce
             },
             render: {
                fillStyle: fillStyle4,
                strokeStyle: fillStyle4,
                lineWidth: 1,
             }, 
        label: 'plinko'
    }, 
    true);

    Composite.add(world, renderStop)

    const renderHtop = Bodies.fromVertices(width/2 + width * 0.2, 100, hScale, {
        isSleeping: false,
            friction:0.0001,
            restitution: 1,
            density:0.001,
            frictionAir: 0.0001,
            inverseInertia: 0,
                force: {
                    y: speedForce
             },
             render: {
                fillStyle: fillStyle5,
                strokeStyle: fillStyle5,
                lineWidth: 1,
             }, 
        label: 'plinko'
    }, 
    true);

    Composite.add(world, renderHtop)

    const renderA3top = Bodies.fromVertices(width/2 + width * 0.3, 100, a3Scale, {
        isSleeping: false,
            friction:0.0001,
            restitution: 1,
            density:0.001,
            frictionAir: 0.0001,
            inverseInertia: 0,
                force: {
                    y: speedForce
             },
             render: {
                fillStyle: fillStyle6,
                strokeStyle: fillStyle6,
                lineWidth: 1,
             }, 
        label: 'plinko'
    }, 
    true);

    Composite.add(world, renderA3top)

    const renderWtop = Bodies.fromVertices(width/2 + width * 0.4, 100, wScale, {
            isSleeping: false,
            friction:0.0001,
            restitution: 1,
            density:0.001,
            frictionAir: 0.0001,
            inverseInertia: 0,
                force: {
                    y: speedForce + 0.0017
             },
             render: {
                fillStyle: fillStyle7,
                strokeStyle: fillStyle7,
                lineWidth: 1,
             }, 
        label: 'plinko'
    }, 
    true);

    Composite.add(world, renderWtop)


    // Add MIDDLE 'Adam Shaw' to canvas //
    // make sure to rename tag for collision event //
    
    const renderA = Bodies.fromVertices(width/12, height/2, aScale, {
        isSleeping: false,
        friction:0.0001,
        restitution: 1,
        density:0.001,
        frictionAir: 0.0001,
        inverseInertia: 0,
        render: {
            fillStyle: fillStyle3,
            strokeStyle: fillStyle3,
            lineWidth: 1,
        },
        label: 'letter'
    }, 
    true);
    Composite.add(world, renderA)
    console.log('margin',margin)

    const renderD = Bodies.fromVertices(width/5.5, height/2, dScale, {
        isSleeping: false,
        friction:0.0001,
        restitution: 1,
        density:0.001,
        frictionAir: 0.0001,
        inverseInertia: 0,
        render: {
            fillStyle: fillStyle1,
            strokeStyle: fillStyle1,
            lineWidth: 1,
        },
        label: 'letter'
    }, 
    true);

    Composite.add(world, renderD)

    const renderA2 = Bodies.fromVertices(width/3.5, height/2, a2Scale, {
        isSleeping: false,
        friction:0.0001,
        restitution: 1,
        density:0.001,
        frictionAir: 0.0001,
        inverseInertia: 0,
        render: {
            fillStyle: fillStyle2,
            strokeStyle: fillStyle2,
            lineWidth: 1,
        },
        label: 'letter'
    }, 
    true);

    Composite.add(world, renderA2)

    const renderM = Bodies.fromVertices(width/2.5, height/2, mScale, {
        isSleeping: false,
        friction:0.0001,
        restitution: 1,
        density:0.001,
        frictionAir: 0.0001,
        inverseInertia: 0,
        render: {
            fillStyle: fillStyle7,
            strokeStyle: fillStyle7,
            lineWidth: 1,
        },
        label: 'letter'
    }, 
    true);

    Composite.add(world, renderM)

    const renderS = Bodies.fromVertices(width/2 + width * 0.1, height/2, sScale, {
        isSleeping: false,
        friction:0.0001,
        restitution: 1,
        density:0.001,
        frictionAir: 0.0001,
        inverseInertia: 0,
        render: {
            fillStyle: fillStyle,
            strokeStyle: fillStyle,
            lineWidth: 1,
        },
        label: 'letter'
    }, 
    true);

    Composite.add(world, renderS)

    const renderH = Bodies.fromVertices(width/2 + width * 0.2, height/2, hScale, {
        isSleeping: false,
        friction:0.0001,
        restitution: 1,
        density:0.001,
        frictionAir: 0.0001,
        inverseInertia: 0,
        render: {
            fillStyle: fillStyle5,
            strokeStyle: fillStyle5,
            lineWidth: 1,
        },
        label: 'letter'
    }, 
    true);

    Composite.add(world, renderH)

    const renderA3 = Bodies.fromVertices(width/2 + width * 0.3, height/2, a3Scale, {
        isSleeping: false,
        friction:0.0001,
        restitution: 1,
        density:0.001,
        frictionAir: 0.0001,
        inverseInertia: 0,
        render: {
            fillStyle: fillStyle6,
            strokeStyle: fillStyle6,
            lineWidth: 1,
        },
        label: 'letter'
    }, 
    true);

    Composite.add(world, renderA3)

    const renderW = Bodies.fromVertices(width/2 + width * 0.4, height/2, wScale, {
        isSleeping: false,
        friction:0.0001,
        restitution: 1,
        density:0.001,
        frictionAir: 0.0001,
        inverseInertia: 0,
        render: {
            fillStyle: fillStyle4,
            strokeStyle: fillStyle4,
            lineWidth: 1,
        },
        label: 'letter'
    }, 
    true);

    Composite.add(world, renderW)

   
    const renderAbottom = Bodies.fromVertices(width/12, height - 100, aScale, {
        isSleeping: false,
        friction:0.0001,
        restitution: 1,
        density:0.001,
        frictionAir: 0.0001,
        inverseInertia: 0,
        render: {
            fillStyle: fillStyle7,
            strokeStyle: fillStyle7,
            lineWidth: 1,
        },
        label: 'letter'
    }, 
    true);
    Composite.add(world, renderAbottom)
    console.log('margin',margin)

    const renderDbottom = Bodies.fromVertices(width/5.5, height - 100, dScale, {
        isSleeping: false,
        friction:0.0001,
        restitution: 1,
        density:0.001,
        frictionAir: 0.0001,
        inverseInertia: 0,
        render: {
            fillStyle: fillStyle6,
            strokeStyle: fillStyle6,
            lineWidth: 1,
        },
        label: 'letter'
    }, 
    true);

    Composite.add(world, renderDbottom)

    const renderA2bottom = Bodies.fromVertices(width/3.5, height - 100, a2Scale, {
        isSleeping: false,
        friction:0.0001,
        restitution: 1,
        density:0.001,
        frictionAir: 0.0001,
        inverseInertia: 0,
        render: {
            fillStyle: fillStyle5,
            strokeStyle: fillStyle5,
            lineWidth: 1,
        },
        label: 'letter'
    }, 
    true);

    Composite.add(world, renderA2bottom)

    const renderMbottom = Bodies.fromVertices(width/2.5, height - 100, mScale, {
        isSleeping: false,
        friction:0.0001,
        restitution: 1,
        density:0.001,
        frictionAir: 0.0001,
        inverseInertia: 0,
        render: {
            fillStyle: fillStyle4,
            strokeStyle: fillStyle4,
            lineWidth: 1,
        },
        label: 'letter'
    }, 
    true);

    Composite.add(world, renderMbottom)

    const renderSbottom = Bodies.fromVertices(width/2 + width * 0.1, height - 100, sScale, {
        isSleeping: false,
        friction:0.0001,
        restitution: 1,
        density:0.001,
        frictionAir: 0.0001,
        inverseInertia: 0,
        render: {
            fillStyle: fillStyle3,
            strokeStyle: fillStyle3,
            lineWidth: 1,
        },
        label: 'letter'
    }, 
    true);

    Composite.add(world, renderSbottom)

    const renderHbottom = Bodies.fromVertices(width/2 + width * 0.2, height - 100, hScale, {
        isSleeping: false,
        friction:0.0001,
        restitution: 1,
        density:0.001,
        frictionAir: 0.0001,
        inverseInertia: 0,
        render: {
            fillStyle: fillStyle2,
            strokeStyle: fillStyle2,
            lineWidth: 1,
        },
        label: 'letter'
    }, 
    true);

    Composite.add(world, renderHbottom)

    const renderA3bottom = Bodies.fromVertices(width/2 + width * 0.3, height - 100, a3Scale, {
        isSleeping: false,
        friction:0.0001,
        restitution: 1,
        density:0.001,
        frictionAir: 0.0001,
        inverseInertia: 0,
        render: {
            fillStyle: fillStyle,
            strokeStyle: fillStyle,
            lineWidth: 1,
        },
        label: 'letter'
    }, 
    true);

    Composite.add(world, renderA3bottom)

    const renderWbottom = Bodies.fromVertices(width/2 + width * 0.4, height - 100, wScale, {
        isSleeping: false,
        friction:0.0001,
        restitution: 1,
        density:0.001,
        frictionAir: 0.0001,
        inverseInertia: 0,
        render: {
            fillStyle: fillStyle,
            strokeStyle: fillStyle,
            lineWidth: 1,
        },
        label: 'letter'
    }, 
    true);

    Composite.add(world, renderWbottom)
    
    const contourSize = 50;
    Composite.add(world, [
        // walls
        Bodies.rectangle(width/2, 0, width, padding / 2, { isStatic: true }),
        Bodies.rectangle(width / 2,
        height + contourSize / 2,
        width,
        contourSize + padding / 2,
        {
            isStatic: true,
            fillStyle: "green"
        }
        ),
        Bodies.rectangle(width, 0, padding / 2, height * 2, {
            isStatic: true,
            render: {
                fillStyle: 'black',
            },
            }),
        Bodies.rectangle(0, 0, padding / 2, height * 2, {
            isStatic: true,
            render: {
                fillStyle: 'black',
            },
            })
    ]);

    function handleCollision(event) {
        const { pairs } = event;
    
        pairs.forEach(pair => {
            const { bodyA, bodyB } = pair;
            const { label: labelA } = bodyA;
            const { label: labelB } = bodyB;
    
            // ! change the color only if one of the two body is a plinko
            if(labelA !== labelB) {
            if (labelA === 'plinko') {
                const { fillStyle } = bodyA.render;
                bodyB.render.fillStyle = fillStyle;
                bodyB.render.strokeStyle = fillStyle;
            } if (labelB === 'plinko') {
                const { fillStyle } = bodyB.render;
                bodyA.render.fillStyle = fillStyle;
                bodyA.render.strokeStyle = fillStyle;
            }
            }
            
        });
    }

    // add mouse control
    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                // allow bodies on mouse to rotate
                angularStiffness: 0,
                render: {
                    visible: false
                }
            }
        });

    Composite.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

     Events.on(engine, 'collisionStart', handleCollision);

    // run the engine
    Matter.Runner.run(engine);
    // run the renderer
    Render.run(render);

}, [] )

return (
    <div id="matter-mobile" ref={bodyRef}>
        <section className="shapes-mobile"></section>
    </div>
  )
}

export default MatterMobile;