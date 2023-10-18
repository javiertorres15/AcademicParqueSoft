<template>
    <!-- Header -->
    <header id="header" class="header">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="text-container">
                        <div class="countdown">
                            <span id="clock"></span>
                        </div>
                        <h1 style="color: black;">Únete a una experiencia educativa de vanguardia</h1>
                        <p style="color: black;" class="p-large">Clases Online En Vivo, dictadas por expertos en la industria.
                            Inicia desde cero y te certificas en 8 meses.</p>
                        <a class="btn-solid-lg page-scroll" href="#register">Registrate</a>
                    </div> <!-- end of text-container -->
                </div> <!-- end of col -->
            </div> <!-- end of row -->
        </div> <!-- end of container -->
    <br>
    <br>
    <br>
        <!-- Image Slider -->
        <div class="outer-container">
            <div class="slider-container">
                <div class="swiper-container image-slider-1">
                    <div class="carrusel" hero>
                        <div id="carouselExampleIndicators" class="carousel slide">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <!-- Video en lugar de imagen -->
                                    <video class="d-block w-100" autoplay muted loop>
                                        <source src="@/views/pro-avanzada/imagenes/video-pro-avanzada.mp4" type="video/mp4">
                                
                                    </video>
                                </div>
                                <div class="carousel-item">
                                    <video class="d-block w-100">
                                        <source src="@/assets/imagenes/imagenprincipal.mp4" type="video/mp4">
                                    </video>
                                    
                                </div>
                                <div class="carousel-item">
                                    <img src="@/assets/imagenes/imagenprincipal.mp4" class="d-block w-100 img-fluid" alt="Imagen">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
    
                </div> <!-- end of swiper-container -->
            </div> <!-- end of slider-container -->
        </div> <!-- end of outer-container -->
        <!-- end of image slider -->
    
    </header> <!-- end of header -->
    <!-- end of header -->
    
    <!-- Registration -->
    <div id="register" class="form-1">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="text-container">
                        <h2>Pre-inscribete usando el formulario</h2>
                        <p>Es fácil registrarse en el curso, simplemente complete el formulario y haga clic en enviar.</p>
                    </div> <!-- end of text-container -->
                </div> <!-- end of col -->
                <div class="col-lg-6">
    
                    <!-- Registration Form -->
                    <div class="form-container">
                        <form id="registrationForm" data-toggle="validator" data-focus="false">
                            <div class="form-group">
                                <input type="text" class="form-control-input" id="rname" name="rname" required>
                                <label class="label-control" for="rname">Nombre completo</label>
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control-input" id="remail" name="remail" required>
                                <label class="label-control" for="remail">Correo electronico</label>
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control-input" id="rphone" name="rphone" required>
                                <label class="label-control" for="rphone">Numero telefonico</label>
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="form-control-submit-button">Enviar</button>
                            </div>
                            <div class="form-message">
                                <div id="rmsgSubmit" class="h3 text-center hidden"></div>
                            </div>
                        </form>
                    </div> <!-- end of form-container -->
                    <!-- end of registration form -->
    
                </div> <!-- end of col -->
            </div> <!-- end of row -->
        </div> <!-- end of container -->
    </div> <!-- end of form-1 -->
    <!-- end of registration -->
    
    <!-- Description -->
    <div id="description" class="basic-2">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>What Will You Learn In Our SEO Focused Training Course</h2>
                </div> <!-- end of col -->
            </div> <!-- end of row -->
            <div class="row">
                <div class="col-lg-6">
                    <ul class="list-unstyled li-space-lg first">
                        <li class="media">
                            <i class="bullet">1</i>
                            <div class="media-body">
                                <h4>Optimizing your site for mobile devices</h4>
                                <p>One of the keys of great SEO is having a mobile friendly website which works smoothly on all devices</p>
                            </div>
                        </li>
                        <li class="media">
                            <i class="bullet">2</i>
                            <div class="media-body">
                                <h4>Understand how users search</h4>
                                <p>It's not enough anymore to find relevant industry keywords and write huge amounts of content </p>
                            </div>
                        </li>
                        <li class="media">
                            <i class="bullet">3</i>
                            <div class="media-body">
                                <h4>Write for humans optimize for engines</h4>
                                <p>Write well structured and understandable articles not just a mix of paragraphs that contain keywords</p>
                            </div>
                        </li>
                    </ul>
                </div> <!-- end of col -->
                <div class="col-lg-6">
                    <ul class="list-unstyled li-space-lg second">
                        <li class="media">
                            <i class="bullet">4</i>
                            <div class="media-body">
                                <h4>Analyse your existing search traffic</h4>
                                <p>A good action plan comes out of understanding where your current position is and the environment</p>
                            </div>
                        </li>
                        <li class="media">
                            <i class="bullet">5</i>
                            <div class="media-body">
                                <h4>Keep updated with the latest changes</h4>
                                <p>Google changes it's search indexing algorithm twice a year so it's important to stay updated with news</p>
                            </div>
                        </li>
                        <li class="media">
                            <i class="bullet">6</i>
                            <div class="media-body">
                                <h4>Learn the most important ranking factors</h4>
                                <p>Learn which are the most important search engine ranking factors and optimize your website accordnigly</p>
                            </div>
                        </li>
                    </ul>
                </div> <!-- end of col -->
            </div> <!-- end of row -->
        </div> <!-- end of container -->
    </div> <!-- end of basic-2 -->
    <!-- end of description -->
    
    
    
    <!-- Details Lightbox -->
    <div id="details-lightbox" class="lightbox-basic zoom-anim-dialog mfp-hide">
        <div class="container">
            <div class="row">
                <button title="Close (Esc)" type="button" class="mfp-close x-button">×</button>
                <div class="col-lg-8">
                    <div class="image-container">
                        <img class="img-fluid" src="@/assets/Imagenes/Cabeceras/emprendimiento.jpg" alt="alternative">
                    </div> <!-- end of image-container -->
                </div> <!-- end of col -->
                <div class="col-lg-4">
                    <h3>SEO Training Course</h3>
                    <hr>
                    <h5>For everybody</h5>
                    <p>The training course is dedicates to anyone passionate about the web and in need of improving their current online presence.</p>
                    <ul class="list-unstyled li-space-lg">
                        <li class="media">
                            <i class="fas fa-square"></i>
                            <div class="media-body">Link building framework</div>
                        </li>
                        <li class="media">
                            <i class="fas fa-square"></i>
                            <div class="media-body">Know your current position</div>
                        </li>
                        <li class="media">
                            <i class="fas fa-square"></i>
                            <div class="media-body">Partnering with blogs</div>
                        </li>
                        <li class="media">
                            <i class="fas fa-square"></i>
                            <div class="media-body">Naming your images</div>
                        </li>
                        <li class="media">
                            <i class="fas fa-square"></i>
                            <div class="media-body">Creating good sitemaps</div>
                        </li>
                        <li class="media">
                            <i class="fas fa-square"></i>
                            <div class="media-body">Writing for humans</div>
                        </li>
                    </ul>
                    <a class="btn-solid-reg mfp-close page-scroll" href="#register">SIGN UP</a> <a class="btn-outline-reg mfp-close as-button" href="#screenshots">BACK</a>
                </div> <!-- end of col -->
            </div> <!-- end of row -->
        </div> <!-- end of container -->
    </div> <!-- end of lightbox-basic -->
    <!-- end of details lightbox -->
    
    
    
    <!-- Testimonials -->
    <div class="slider-2">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h3>Check out our attendees testimonials from previous editions of the SEO Training</h3>
    
                    <!-- Text Slider -->
                    <div class="slider-container">
                        <div class="swiper-container text-slider">
                            <div class="swiper-wrapper">
    
                                <!-- Slide -->
                                <div class="swiper-slide">
                                    <div class="image-wrapper">
                                        <img class="img-fluid" src="@/assets/Imagenes/Cabeceras/emprendimiento.jpg" alt="alternative">
                                    </div> <!-- end of image-wrapper -->
                                    <div class="text-wrapper">
                                        <div class="testimonial-text">I took the SEO training course about a year ago and I am very happy. It taught me all the basics of search engine optimization and some tricks.</div>
                                        <div class="testimonial-author">Jude Thorn - Online Marketer</div>
                                    </div> <!-- end of text-wrapper -->
                                </div> <!-- end of swiper-slide -->
                                <!-- end of slide -->
    
                                <!-- Slide -->
                                <div class="swiper-slide">
                                    <div class="image-wrapper">
                                        <img class="img-fluid" src="@/assets/Imagenes/Cabeceras/emprendimiento.jpg" alt="alternative">
                                    </div> <!-- end of image-wrapper -->
                                    <div class="text-wrapper">
                                        <div class="testimonial-text">Awesome course for the money. I never thought I could learn so much about search engine optimization in such a short amount of time. Highly recommend.</div>
                                        <div class="testimonial-author">Roy Smith - Developer</div>
                                    </div> <!-- end of text-wrapper -->
                                </div> <!-- end of swiper-slide -->
                                <!-- end of slide -->
    
                                <!-- Slide -->
                                <div class="swiper-slide">
                                    <div class="image-wrapper">
                                        <img class="img-fluid" src="@/assets/Imagenes/Cabeceras/emprendimiento.jpg" alt="alternative">
                                    </div> <!-- end of image-wrapper -->
                                    <div class="text-wrapper">
                                        <div class="testimonial-text">Corso is the best SEO training course in the market. It teaches you all the basics but it also adds value with some advanced tips & tricks the are great.</div>
                                        <div class="testimonial-author">Martin Singer - Online Marketer</div>
                                    </div> <!-- end of text-wrapper -->
                                </div> <!-- end of swiper-slide -->
                                <!-- end of slide -->
    
                                <!-- Slide -->
                                <div class="swiper-slide">
                                    <div class="image-wrapper">
                                        <img class="img-fluid" src="@/assets/Imagenes/Cabeceras/emprendimiento.jpg" alt="alternative">
                                    </div> <!-- end of image-wrapper -->
                                    <div class="text-wrapper">
                                        <div class="testimonial-text">Learning SEO can actually be fun. I attended Corso SEO training and I had a great time with my peer students and the instructors. Highly recommended course.</div>
                                        <div class="testimonial-author">Ronda Louis - Business Owner</div>
                                    </div> <!-- end of text-wrapper -->
                                </div> <!-- end of swiper-slide -->
                                <!-- end of slide -->
    
                            </div> <!-- end of swiper-wrapper -->
    
                            <!-- Add Arrows -->
                            <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div>
                            <!-- end of add arrows -->
    
                        </div> <!-- end of swiper-container -->
                    </div> <!-- end of slider-container -->
                    <!-- end of text slider -->
    
                </div> <!-- end of col -->
            </div> <!-- end of row -->
        </div> <!-- end of container -->
    </div> <!-- end of slider-2 -->
    <!-- end of testimonials -->
    </template>
    
    <style scoped> 
    @import '../pro-avanzada/css/swiper.css';
    @import '../pro-avanzada/css/styles.css';
    @import '../pro-avanzada/css/bootstrap.css';
    </style>
    