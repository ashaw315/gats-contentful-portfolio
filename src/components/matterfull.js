import React, { useEffect } from "react";
import Matter from "matter-js";

function MatterFull() {
    // const loaderRef =  useRef(null)
    // const canvasRef = useRef(null)

useEffect(() => {

    // if setting width and height this way, use UseState
        // if(typeof window !== 'undefined') {
        //     setWidth(window.innerWidth)
        //     setHeight(window.innerHeight)

        // }

    const sectionTag = document.querySelector("section.shapes");

    //width and height of the page
    let w = window.innerWidth
    let h = window.innerHeight

    const { Engine, Render, World, Bodies, Events, Body, Common, Vertices, Composite, Mouse, MouseConstraint } = Matter;
    Common.setDecomp(require('poly-decomp'));
    // set up the engine
    const engine = Engine.create();

    // set up the renderer
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

    // global variables used throughout the canvas
    const width = w;
    const height = h;
    // console.log("margin",width/10 * 0.75)

    // number of columns and rows for the grid of pegs
    const columns = 20;
    const rows = 10;
    // const logoInt = 1
    // margin to allocate buckets underneath the grid
    const margin = width/10 * 0.5;
    // padding to include make space for two rectangles at either side of the canvas
    const padding = width / columns / 2;
    // number of initial and maximum plinkos included in the canvas
    const initialPlinkos = 10;
    const maxPlinkos = 250;
    // console.log('lettertest',width/100* 0.1)

    // utility function returning a random integer between two values
    const randomBetween = (min, max) =>
    Math.floor(Math.random() * (max - min)) + min;

    // function fabricating a plinko, as a circle included atop the canvas
    const makePlinko = () => {
    const x = randomBetween(width / 4, (width * 3) / 4);
    const y = randomBetween(0, height / 2) * -1;
    // const r = 8;
    // add a color picked at random around the color wheel
    
const letterA = Vertices.fromPath('155.27 110.34 163.34 110.34 174.73 140.34 166.3 140.34 164.35 135.05 153.68 135.05 151.92 140.34 143.89 140.34');
const letterA2 = Vertices.fromPath('155.27 110.34 163.34 110.34 174.73 140.34 166.3 140.34 164.35 135.05 153.68 135.05 151.92 140.34 143.89 140.34');
const letterA3 = Vertices.fromPath('155.27 110.34 163.34 110.34 174.73 140.34 166.3 140.34 164.35 135.05 153.68 135.05 151.92 140.34 143.89 140.34');
const letterD = Vertices.fromPath('175.66 110.34 196 110.34 201.96 116.3 201.96 134.39 196 140.34 175.66 140.34');
const letterM = Vertices.fromPath('132.96 144.72 141.03 144.72 148.93 159.9 156.78 144.72 164.85 144.72 164.85 174.72 156.91 174.72 156.91 157.74 150.3 170.49 147.16 170.49 140.55 157.74 140.55 174.72 132.96 174.72');
const letterS = Vertices.fromPath('180.07 146.19 198.73 146.19 203.78 151.24 197.63 157.4 194.22 153.99 184.62 153.99 183.32 155.29 183.32 158.04 184.12 158.85 198.93 159.69 204.18 164.95 204.18 174.45 198.43 180.2 178.67 180.2 173.42 174.95 179.57 168.8 183.17 172.4 193.88 172.4 195.17 171.1 195.17 168.3 194.38 167.5 179.57 166.65 174.32 161.4 174.32 151.94');
const letterH = Vertices.fromPath('158.2 141.27 166.14 141.27 166.14 152.52 176.64 152.52 176.64 141.27 184.58 141.27 184.58 171.27 176.64 171.27 176.64 159.58 166.14 159.58 166.14 171.27 158.2 171.27');
const letterW = Vertices.fromPath('132.17 106.17 140.34 106.17 144.48 124.48 149.16 106.17 155.34 106.17 160.01 124.48 164.16 106.17 171.97 106.17 164.34 136.17 156.7 136.17 152.11 118.22 147.53 136.17 138.81 136.17');

    const colors = [48, 215, 5];
    const color = colors[Math.floor(Math.random()*colors.length)];
    const fillStyle = `hsl(${color}, 90%, 60%)`;
    let aScale = Vertices.scale(letterA, width/100* 0.05, width/100* 0.05)
    let a2Scale = Vertices.scale(letterA2, width/100* 0.05, width/100* 0.05)
    let a3Scale = Vertices.scale(letterA3, width/100* 0.05, width/100* 0.05)
    let dScale = Vertices.scale(letterD, width/100* 0.05, width/100* 0.05)
    let mScale = Vertices.scale(letterM, width/100* 0.05, width/100* 0.05)
    let sScale = Vertices.scale(letterS, width/100* 0.05, width/100* 0.05)
    let hScale = Vertices.scale(letterH, width/100* 0.05, width/100* 0.05)
    let wScale = Vertices.scale(letterW, width/100* 0.05, width/100* 0.05)

    return Bodies.fromVertices(x, y, Common.choose([aScale, a2Scale, a3Scale, dScale, mScale, sScale, hScale, wScale]), {
        restitution: 0.8,
        // frictionAir: 0.05,
        render: {
            fillStyle: fillStyle,
            strokeStyle: fillStyle,
            lineWidth: 1,
        },
        label: 'plinko'
    }, 
    true);
    };

    console.log('WIDTH' ,width/50)
    
    
    // function fabricating a peg, as a white circle with a static position
    // accepting as input the coordinates of the circle's center
    const makePeg = (x, y) => {
    // const r = 2;
    // const colors = [48, 215, 5];
    // 355, 109, 55, 190, 260, 337, 360, 230
    // const color = colors[Math.floor(Math.random()*colors.length)];
    // const fillStyle = `hsl(${color}, 90%, 50%)`;
    var size = width/50;

    let partA = Bodies.rectangle(x, y, size, size / 5, {angle: Math.PI * -0.03}, {});
        partA.render.fillStyle = 'black';
    let partB = Bodies.rectangle(x, y, size / 5, size, { render: partA.render, angle: Math.PI * 0.09 });
    const body =  Body.create({
            parts: [partA, partB],
            isStatic: true,
            // render: { 
            //     fillStyle: 'white' 
            // },
            // add a label to later identify the circle in the collision event
            label: 'peg',
        });
        
        // console.log("body", body)
        return body;
    
    };

    // function fabricating a bucket, as a white taller-than-wider rectangle positioned at the bottom of the canvas

    // const makeBucket = x => {
    // const w = 500;
    // const h = 80;
    // const y = height - h;
    // console.log(y)


    // return Bodies.rectangle(x, y, w, h, {
        
    //     render: {
    //         fillStyle: "green",
    //         restitution: 0.9, 
    //         friction: 0.1,
    //         inertia: Infinity,
    //         sprite: {
    //             texture: `${logo}`
    //         }
    //     },
    // });
    // };

    // PLINKO's elements
    // to prevent the plinkos from bouncing off the canvas's scope, include rectangle elements at the bottom and sides of the element
    const contourSize = 50;
    const contourBottom = Bodies.rectangle(
    width / 2,
    height + contourSize / 2,
    width,
    contourSize,
    {
        isStatic: true,
        fillStyle: "green"
    }
    );

    // use the padding to create the left and right walls as white tall and thin rectangles
    // the idea is to have them pick up the color of the plinkos coming into contact with the shape
    const contourLeft = Bodies.rectangle(0, 0, padding / 2, height * 2, {
    isStatic: true,
    render: {
        fillStyle: 'black',
    },
    });
    const contourRight = Bodies.rectangle(width, 0, padding / 2, height * 2, {
    isStatic: true,
    render: {
        fillStyle: 'black',
    },
    });

    const contours = [contourLeft, contourRight, contourBottom];

    // plinko
    // an array of plinkos; the idea is to populate with the world immediately with a set number of plinkos

    const plinkos = Array(initialPlinkos)
    .fill()
    .map(() => makePlinko());

    // pegs
    // array of columns and rows; the idea is to have pegs ranging the width and height of the canvas
    // use the padding to reduce the horizontal space allocated to the pegs
    const columnSize = (width - padding * 2) / columns;
    const rowSize = (height - margin) / rows;
    const grid = Array(rows)
    .fill()
    .map((rowItem, row) => {
        // have the number of columns alternate with a shorter row every other row
        // the idea is to then offset the shorter row to recreate the plinko's own structure
        const cols = row % 2 === 0 ? columns : columns - 1;
        const dx = cols !== columns ? columnSize / 2 : 0;
        return Array(cols)
        .fill()
        .map((columnItem, column) => {
            const x = padding + columnSize * column + columnSize / 2 + dx;
            const y = rowSize * row + rowSize / 2;
            return makePeg(x, y);
        });
    });

    // since grid refers to a 2d array, flatten the items to a one-dimensional array
    const pegs = grid.reduce((acc, curr) => [...acc, ...curr], []);

    // buckets
    // arrays of buckets in which the plinkos would eventually fall
    // as many buckets as the number of columns -1, to make use of the left and right wall for the outer edges
    // const buckets = Array(logoInt)
    // .fill()
    // .map((columnItem, column) => {
    //     const x = width / 2;
    //     console.log(columnSize)
    //     console.log("width",width)
    //     console.log("X",x)
    //     return makeBucket(x);
    // });

    const { world } = engine;
    World.add(world, [...contours, ...plinkos, ...pegs]);
    // ...buckets

    const colors = [48, 215, 5];
    // 355, 109, 55, 190, 260, 337, 360, 230
    const color = colors[Math.floor(Math.random()*colors.length)];
    const fillStyle = `hsl(${color}, 90%, 50%)`;


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
    
    const renderA = Bodies.fromVertices(width/12, height, aScale, {
        restitution: 0.8,
        // frictionAir: 0.05,
        density: 0.00004,
        render: {
            fillStyle: fillStyle,
            strokeStyle: fillStyle,
            lineWidth: 1,
        },
        label: 'plinko'
    }, 
    true);
    Composite.add(world, renderA)
    console.log('margin',margin)

    const renderD = Bodies.fromVertices(width/5.5, height, dScale, {
        restitution: 0.8,
        // frictionAir: 0.05,
        density: 0.00004,
        render: {
            fillStyle: fillStyle,
            strokeStyle: fillStyle,
            lineWidth: 1,
        },
        label: 'plinko'
    }, 
    true);

    Composite.add(world, renderD)

    const renderA2 = Bodies.fromVertices(width/3.5, height, a2Scale, {
        restitution: 0.8,
        density: 0.00004,
        friction: 0,
        render: {
            fillStyle: fillStyle,
            strokeStyle: fillStyle,
            lineWidth: 1,
        },
        label: 'plinko'
    }, 
    true);

    Composite.add(world, renderA2)

    const renderM = Bodies.fromVertices(width/2.5, height, mScale, {
        restitution: 0.8,
        density: 0.00004,
        friction: 0,
        render: {
            fillStyle: fillStyle,
            strokeStyle: fillStyle,
            lineWidth: 1,
        },
        label: 'plinko'
    }, 
    true);

    Composite.add(world, renderM)

    const renderS = Bodies.fromVertices(width/2 + width * 0.1, height - 20, sScale, {
        restitution: 0.8,
        density: 0.00004,
        friction: 0,
        render: {
            fillStyle: fillStyle,
            strokeStyle: fillStyle,
            lineWidth: 1,
        },
        label: 'plinko'
    }, 
    true);

    Composite.add(world, renderS)

    const renderH = Bodies.fromVertices(width/2 + width * 0.2, height, hScale, {
        restitution: 0.8,
        density: 0.00004,
        friction: 0,
        render: {
            fillStyle: fillStyle,
            strokeStyle: fillStyle,
            lineWidth: 1,
        },
        label: 'plinko'
    }, 
    true);

    Composite.add(world, renderH)

    const renderA3 = Bodies.fromVertices(width/2 + width * 0.3, height, a3Scale, {
        restitution: 0.8,
        density: 0.00004,
        friction: 0,
        render: {
            fillStyle: fillStyle,
            strokeStyle: fillStyle,
            lineWidth: 1,
        },
        label: 'plinko'
    }, 
    true);

    Composite.add(world, renderA3)

    const renderW = Bodies.fromVertices(width/2 + width * 0.4, height, wScale, {
        restitution: 0.8,
        density: 0.00004,
        friction: 0,
        render: {
            fillStyle: fillStyle,
            strokeStyle: fillStyle,
            lineWidth: 1,
        },
        label: 'plinko'
    }, 
    true);

    Composite.add(world, renderW)

    
// function adding a single plinko, used following a mouse press and at an interval
function addPlinko() {
    const plinko = makePlinko();
    World.add(world, plinko);
  }
  const intervalID = setInterval(() => {
    addPlinko();
    // as a precaution remove plinkos from world.bodies if the array surpasses a certain threshold
    const existingPlinkos = world.bodies.filter(body => body.label === 'plinko');
    if (existingPlinkos.length > maxPlinkos) {
      World.remove(world, existingPlinkos[0]);
    }
  }, 1000);
  
  document.querySelector('body').addEventListener('click', addPlinko);
    

    // following a collision event retrieve the label of the two bodies
    // if one is a plinko, consider its color and apply it to the other body

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
        } if (labelB === 'plinko') {
            const { fillStyle } = bodyB.render;
            bodyA.render.fillStyle = fillStyle;
        }
        }
        
    });
    }

      // add mouse control
      var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
          mouse: mouse,
          constraint: {
              stiffness: 0.2,
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
    Engine.run(engine);
    // run the renderer
    Render.run(render);


}, [])

  return (
    <div id="matter-full">
        <section className="shapes"></section>
    </div>
  );
}

export default MatterFull;
