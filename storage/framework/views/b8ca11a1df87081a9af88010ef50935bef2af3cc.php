<!DOCTYPE html>
<html lang="en" >

<head >

    <meta charset="utf-8" >
    <meta http-equiv="X-UA-Compatible" content="IE=edge" >
    <meta name="viewport" content="width=device-width, initial-scale=1" >
    <?php /*<meta name="description" content="Betoche ......... for test" >*/ ?>
    <?php /*<meta name="author" content="Fire360Boy" >*/ ?>

    <title >Booky.ir</title >

    <link rel="stylesheet" href="<?php echo e(asset('/assets/css/layout.css')); ?>" >
    <?php echo $__env->yieldContent('css'); ?>


    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js" ></script >
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js" ></script >
    <![endif]-->

</head >

<body id="page-top" >
<style >
    .fa-btn {
        margin-right: 6px;
    }
</style >
<nav id="mainNav" class="navbar navbar-default navbar-fixed-top affix" >
    <div class="container-fluid" >

        <div class="navbar-header" >
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#bs-navbar-collapse-1" >
                <span class="sr-only" >Toggle navigation</span > Menu <i class="fa fa-bars" ></i >
            </button >
            <a class="navbar-brand page-scroll" href="#page-top" >Fire360Boy || Booky.ir</a >
        </div >


        <div class="collapse navbar-collapse" id="bs-navbar-collapse-1" >
            <ul class="nav navbar-nav navbar-right" >
                <?php if(Auth::guest()): ?>
                    <li >
                        <a class="page-scroll" href="<?php echo e(url('/')); ?>" ><i class="fa fa-home"></i>&nbsp;Home</a >
                    </li >
                    <li >
                        <a class="page-scroll" href="<?php echo e(url('/dashboards')); ?>" ><i class="fa fa-tachometer"></i>&nbsp;Dashboards</a >
                    </li >
                    <li >
                        <a class="page-scroll" href="<?php echo e(url('/#about')); ?>" ><i class="fa fa-info"></i>&nbsp;About</a >
                    </li >
                    <li >
                        <a class="page-scroll" href="<?php echo e(url('/#statics')); ?>" ><i class="fa fa-line-chart"></i>&nbsp;statics</a >
                    </li >
                    <li >
                        <a class="page-scroll" href="<?php echo e(url('/#contact')); ?>" ><i class="fa fa-volume-up"></i>&nbsp;Contact</a >
                    </li >
                    <li >
                        <a class="page-scroll" href="<?php echo e(url('/register')); ?>" ><i class="fa fa-user-plus"></i>&nbsp;Register</a >
                    </li >
                    <li >
                        <a class="page-scroll" href="<?php echo e(url('/login')); ?>" ><i class="fa fa-sign-in"></i>&nbsp;Sign in</a >
                    </li >
                <?php else: ?>
                    <li >
                        <a class="page-scroll" href="<?php echo e(url('/')); ?>" ><i class="fa fa-home"></i>&nbsp;Home</a >
                    </li >
                    <li >
                        <a class="page-scroll" href="<?php echo e(url('/dashboards')); ?>" ><i class="fa fa-tachometer"></i>&nbsp;Dashboards</a >
                    </li >
                    <li >
                        <a class="page-scroll" href="<?php echo e(url('/#about')); ?>" ><i class="fa fa-info"></i>&nbsp;About</a >
                    </li >
                    <li >
                        <a class="page-scroll" href="<?php echo e(url('/#statics')); ?>" ><i class="fa fa-line-chart"></i>&nbsp;statics</a >
                    </li >
                    <li >
                        <a class="page-scroll" href="<?php echo e(url('/#contact')); ?>" ><i class="fa fa-volume-up"></i>&nbsp;Contact</a >
                    </li >
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                            <?php echo e(Auth::user()->name); ?> <span class="caret"></span>
                        </a>

                        <ul class="dropdown-menu" role="menu">
                            <li><a href="<?php echo e(url('/logout')); ?>"><i class="fa fa-btn fa-sign-out"></i>Logout</a></li>
                        </ul>
                    </li>
                <?php endif; ?>
            </ul >
        </div >

    </div >

</nav >



<?php echo $__env->yieldContent('content'); ?>


<footer style="margin-top: 0px;" class="footer1 page-footer bg-dark" >
    <div class="container" >

        <div class="row" >

            <div class="col-lg-3 col-md-3" >
                <ul class="list-unstyled clear-margins" >

                    <li class="widget-container widget_nav_menu" >

                        <h1 class="title-widget" >Useful links</h1 >

                        <ul >
                            <li ><a href="#" ><i class="fa fa-angle-double-right" ></i > About Us</a ></li >
                            <li ><a href="#" ><i class="fa fa-angle-double-right" ></i > Contact Us</a ></li >
                            <li ><a href="#" ><i class="fa fa-angle-double-right" ></i > Success Stories</a ></li >
                            <li ><a href="#" ><i class="fa fa-angle-double-right" ></i > PG Courses</a ></li >
                            <li ><a href="#" ><i class="fa fa-angle-double-right" ></i > Achiever's Batch</a ></li >
                            <li ><a href="#" ><i class="fa fa-angle-double-right" ></i > Regular Batch</a ></li >
                            <li ><a href="#" ><i class="fa fa-angle-double-right" ></i > Test & Discussion</a ></li >
                            <li ><a href="#" ><i class="fa fa-angle-double-right" ></i > Fast Track T & D</a ></li >
                        </ul >

                    </li >

                </ul >


            </div >


            <div class="col-lg-3 col-md-3" >

                <ul class="list-unstyled clear-margins" >

                    <li class="widget-container widget_nav_menu" >

                        <h1 class="title-widget" >Useful links</h1 >

                        <ul >
                            <li ><a href="#" ><i class="fa fa-angle-double-right" ></i > Test Series Schedule</a ></li >
                            <li ><a href="#" ><i class="fa fa-angle-double-right" ></i > Postal Coaching</a ></li >
                            <li ><a href="#" ><i class="fa fa-angle-double-right" ></i > PG Dr. Bhatia Books</a ></li >
                            <li ><a href="#" ><i class="fa fa-angle-double-right" ></i > UG Courses</a ></li >
                            <li ><a href="#" ><i class="fa fa-angle-double-right" ></i > Satellite Education</a ></li >
                            <li ><a href="#" ><i class="fa fa-angle-double-right" ></i > Study Centres</a ></li >
                            <li ><a href="#" ><i class="fa fa-angle-double-right" ></i > State P.G. Mocks</a ></li >
                            <li ><a href="#" target="_blank" ><i class="fa fa-angle-double-right" ></i > Results</a >
                            </li >

                        </ul >

                    </li >

                </ul >


            </div >


            <div class="col-lg-3 col-md-3" >

                <ul class="list-unstyled clear-margins" >

                    <li class="widget-container widget_nav_menu" >

                        <h1 class="title-widget" >Useful links</h1 >

                        <ul >


                            <li ><a href="#" ><i class="fa fa-angle-double-right" ></i > Enquiry Form</a ></li >
                            <li ><a href="#" ><i class="fa fa-angle-double-right" ></i > Online Test Series</a ></li >
                            <li ><a href="#" ><i class="fa fa-angle-double-right" ></i > Grand Tests Series</a ></li >
                            <li ><a href="#" ><i class="fa fa-angle-double-right" ></i > Subject Wise Test Series</a >
                            </li >
                            <li ><a href="#" ><i class="fa fa-angle-double-right" ></i > Smart Book</a ></li >
                            <li ><a href="#" ><i class="fa fa-angle-double-right" ></i > Test Centres</a ></li >
                            <li ><a href="#" ><i class="fa fa-angle-double-right" ></i > Admission Form</a ></li >
                            <li ><a href="#" ><i class="fa fa-angle-double-right" ></i > Computer Live Test</a ></li >

                        </ul >

                    </li >

                </ul >


            </div >


            <div class="col-lg-3 col-md-3" >


                <ul class="list-unstyled clear-margins" >

                    <li class="widget-container widget_recent_news" >

                        <h1 class="title-widget" >Contact Detail </h1 >

                        <div class="footerp" >

                            <h2 class="title-median" >Navid Co. Designer !!!</h2 >
                            <p ><b >Email id:</b > <a href="mailto:fire360boy@gmail.com" >Fire360Boy@gmail.com</a ></p >
                            <p ><b >Helpline Numbers </b >

                                <b style="color:#ffc106;" >(8AM to 10PM):</b > +98-7132340000, +98-9399858846 </p >

                            <p ><b >Corp Office / Postal Address</b ></p >
                            <p ><b >Phone Numbers : </b > 32345893, </p >
                            <p > 071-32346832, 323483873</p >
                        </div >
                    </li >
                </ul >
            </div >
        </div >
    </div >
</footer >


<div class="footer-bottom" >

    <div class="container" >

        <div class="row" >

            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6" >

                <div class="copyright" >
                    Fire360Boy, All rights reserved
                </div >

            </div >

            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6" >
                <div class="design" >
                    <a href="mailto:fire360boy@gmail.com" >Fire360Boy@gmail.com</a >
                </div >
            </div >
        </div >
    </div >
</div >
<a id="back-to-top" href="#" class="btn btn-primary btn-lg back-to-top" role="button"
   title="Click to return on the top page" data-toggle="tooltip" data-placement="left" ><span
            class="glyphicon glyphicon-chevron-up" ></span ></a >

<script src="<?php echo e(asset('assets/js/layout.js')); ?>" type="text/javascript" ></script >
<?php echo $__env->yieldContent('js'); ?>
<?php echo $__env->yieldContent('inline-js'); ?>
</body >

</html >
