          //initial set up of variables

			var camera, scene, renderer, stats, group, container;

            //sets up where the mouse's X and Y value are initially

			var mouseX = 0, mouseY = 0;

            //sets up var for half weight and height

			var windowHalfX = window.innerWidth / 2;
			var windowHalfY = window.innerHeight / 2;

            //basically setup(); and draw();

			init();
			animate();

			function init() {

                //  1). creates perspective camera with
                //          FOV = 60
                //          aspect ratio of width/height
                //          near and far value
                //  2). sets the camera at a Z of 500

				camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 10000 );
				camera.position.z = 500;

                // initalizes a scene
                // sets scene background color
                // sets fog color and values

				scene = new THREE.Scene();
				scene.background = new THREE.Color( 0xFFFFFF );
				scene.fog = new THREE.Fog( 0x00000, 1, 10000 );

                // creates box geometry with a width, height, and depth of 100
                // creates a normal material

				var geometry = new THREE.IcosahedronBufferGeometry( 100);
				var material = new THREE.MeshPhysicalMaterial( { color: 0x6033D9 } );

                // initilizes a group

				group = new THREE.Group();

                //for loop which loops 1000 times

				for ( var i = 0; i < 200; i ++ ) {

                    // For every i, it creates:
                    //     a mesh(which combines geo and mat)
                    //     a random x, y, and z for said mesh
                    //     a random x and y rotation for said mesh
                    //     sets matrix auto update as false (?)
                    //     updates the matrix
                    //     adds the mesh to the group


					var mesh = new THREE.Mesh( geometry, material );
					mesh.position.x = Math.random() * 2000 - 1000;
					mesh.position.y = Math.random() * 2000 - 1000;
					mesh.position.z = Math.random() * 2000 - 1000;

					mesh.rotation.x = Math.random() * 2 * Math.PI;
					mesh.rotation.y = Math.random() * 2 * Math.PI;

					mesh.matrixAutoUpdate = false;
					mesh.updateMatrix();

					group.add( mesh );

				}

                // adds group to scene

                scene.add( group );
                
                var light = new THREE.PointLight( 0xF4D0CD, 7, 1000 );
                light.position.set( 0, 0, 0 );
                scene.add( light );



				// creates a renderer (with antialiasing)
                // sets pixel ratio
                // sets renderer width and height
                // appends renderer to dom

				renderer = new THREE.WebGLRenderer( { antialias: true, preserveDrawingBuffer: true } );
                // renderer.autoClearColor = false;
                renderer.setPixelRatio( window.devicePixelRatio );
                renderer.setSize( window.innerWidth, 500);
                container = document.getElementById( 'hero-bg' );
                document.getElementById("hero").appendChild(container);
				container.appendChild( renderer.domElement );

				//creates a stat box

				// stats = new Stats();
				// document.body.appendChild( stats.dom );

				// adds MouseMove event listener

				document.addEventListener( 'mousemove', onDocumentMouseMove, false );

				// adds resize event listener

				window.addEventListener( 'resize', onWindowResize, false );

			}

			function onWindowResize() {

                //updates Half X and Half Y var
            
            	windowHalfX = window.innerWidth / 2;
				windowHalfY = window.innerHeight / 2;

                //updates camera aspect ratio

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

                // updates renderer size

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			function onDocumentMouseMove( event ) {

                // distorts mouse move (?) 

				mouseX = ( event.clientX - windowHalfX ) * 10;
				mouseY = ( event.clientY - windowHalfY ) * 10;

			}

			//

			function animate() {

                // requests animation frame
                // renders every frame
                // updates stats

				requestAnimationFrame( animate );

				render();
				// stats.update();

			}

			function render() {

                //sets up time using date()

				var time = Date.now() * 0.001;

                //creates variables with sin to rotate seemingly "random"

				var rx = Math.sin( time * 0.7 ) * 0.5,
					ry = Math.sin( time * 0.3 ) * 0.5,
					rz = Math.sin( time * 0.2 ) * 0.5;

                // moves camera according to mouseX and mouseY (set before in mousemove)

				camera.position.x += ( mouseX - camera.position.x ) * 0.05;
				camera.position.y += ( - mouseY - camera.position.y ) * 0.05;

                // keeps camera looking at center of scene

				camera.lookAt( scene.position );

                //rotates group with variables set preivously

				group.rotation.x = rx;
				group.rotation.y = ry;
				group.rotation.z = rz;

                //renders scene through renderer

				renderer.render( scene, camera );

			}