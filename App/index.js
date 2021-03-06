var Origin = angular.module("Origin", ["ngRoute"]);

Origin.factory("Global", () => {
    return {
        title: "",
        jobs_details: [],
    };
});

Origin.config(function ($routeProvider) {
    $routeProvider
        .when("/info", {
            templateUrl: "./Info/info.html",
            controller: "infoController"
        })
        .when("/jobs", {
            templateUrl: "./Jobs/jobs.template.html",
            controller: "jobsController",
        })
        .when("/job-detail", {
            templateUrl: "./Jobs/jobs-detail.template.html",
            controller: "jobs-detailController",
        })
        .when("/discovery", {
            templateUrl: "./Discovery/Discovery Page.html",
            controller: "discoveryController",
        })
        .when("/articles", {
            templateUrl: "./Articles/articles.html",
            controller: "articlesController",
        })
        .otherwise({
            templateUrl: "./Landing/landing.html",
            controller: "landingController",
        });
});

Origin.controller("MommyController", function ($scope, Global) {
    $scope.global = Global;
});

Origin.controller("landingController", function ($scope, $interval, Global) {
    $scope.global = Global;
    Global.title = "Hire Freelancers & Find Freelance Jobs Online | Freelancer";
    $scope.catalogue = [
        //{url: "", title1: "", title2: ""}
        {
            url: "./Media/logo-design-v2.jpg",
            title1: "Logo Design.",
            title2: "$30 USD in 1 day.",
        },
        {
            url: "./Media/package-design-1-v2.jpg",
            title1: "Package Design.",
            title2: "$280 USD in 4 days.",
        },
        {
            url: "./Media/mobile-design-1-v2.jpg",
            title1: "Mobile Design.",
            title2: "$600 USD in 4 days.",
        },
        {
            url: "./Media/wordpress-1.jpg",
            title1: "Wordpess.",
            title2: "$45 USD in 1 days.",
        },
        {
            url: "./Media/logo-design-2.jpg",
            title1: "Logo Design.",
            title2: "$30 USD in 1 days.",
        },
        {
            url: "./Media/website-1.jpg",
            title1: "Website.",
            title2: "$150 USD in 1 days.",
        },
        {
            url: "./Media/website-design-1.jpg",
            title1: "Website Design.",
            title2: "$140 USD in 13 days.",
        },
        {
            url: "./Media/illustration-v2.jpg",
            title1: "Illustration.",
            title2: "$10 USD in 3 days.",
        },
        {
            url: "./Media/wordpress-2.jpg",
            title1: "Wordpess.",
            title2: "$150 USD in 18 days.",
        },
        {
            url: "./Media/package-design-4.jpg",
            title1: "Package Design.",
            title2: "$100 USD in 6 day.",
        },
        {
            url: "./Media/mobile-design-2-v2.jpg",
            title1: "Mobile Design.",
            title2: "$100 USD in 1 days.",
        },
        {
            url: "./Media/package-design-3.jpg",
            title1: "Package Design.",
            title2: "$155 USD in 2 days.",
        },
        {
            url: "./Media/website-2.jpg",
            title1: "Website.",
            title2: "$200 USD in 9 days.",
        },
        {
            url: "./Media/3d-modeling.jpg",
            title1: "3D Modeling.",
            title2: "$110 USD in 28 days.",
        },
        {
            url: "./Media/logo-design-3.jpg",
            title1: "Logo Design.",
            title2: "$20 USD in 3 days.",
        },
        {
            url: "./Media/graphic-design-2.jpg",
            title1: "Graphic Design.",
            title2: "$60 USD in 10 days.",
        },
    ];
    $scope.display = [
        //{url: "", title: ""}
        {
            url: "./Media/nasa-1080.jpg",
            title: "This radiation shield for NASA cost $500 USD and took 15 days",
        },
        {
            url: "./Media/house-1080.jpg",
            title: "This architectural design cost $500 USD and took 15 days",
        },
        {
            url: "./Media/magazine-1080.jpg",
            title: "This illustration cost $100 USD and took 5 days",
        },
        {
            url: "./Media/mobile-phone-1080.jpg",
            title: "This mobile app design cost $1500 USd and took 20 days",
        },
    ];
    $scope.displayIx = 0;
    $interval(() => {
        $scope.displayIx++;
        $scope.displayIx %= 4;
    }, 5000);
    $scope.displayStyle = () => {
        return {
            background: "url(" + $scope.display[$scope.displayIx].url + ")",
            "background-size": "cover",
            "background-position": "center",
            "background-repeat": "no-repeat",
            transition: "background 1s linear",
        };
    };
    $scope.figureStyle = (url) => {
        return {
            background: "url(" + url + ")",
            "background-size": "cover",
            "background-position": "center",
            "background-repeat": "no-repeat",
            transition: "all 0.25s linear",
            display: "flex",
            width: "20vw",
            height: "17vw",
        };
    };
});

Origin.controller("discoveryController", function ($scope, Global) {
    $scope.global = Global;
    Global.title = "Discover the Best of Freelancer | Freelancer";
    $scope.catalogue = [
        //{url: "", title1: "", title2: ""}
        {
            url: "./Discovery/Pictures/Body/Items Layout/Item 1.jpg",
            title1: "Coffee Label Design",
            title2: "by mfuadmumtaz",
        },
        {
            url: "./Discovery/Pictures/Body/Items Layout/Item 2.jpg",
            title1: "Minimalist Soda Can Label Design",
            title2: "by pscreativeworks",
        },
        {
            url: "./Discovery/Pictures/Body/Items Layout/Item 3.jpg",
            title1: "App Development QVAN Service",
            title2: "by blackdahlia24",
        },
        {
            url: "./Discovery/Pictures/Body/Items Layout/Item 4.jpg",
            title1: "90's Neon Fitness Logo",
            title2: "by brionesandrie",
        },
        {
            url: "./Discovery/Pictures/Body/Items Layout/Item 5.jpg",
            title1: "Potato Chips Bag Designs",
            title2: "by Saadalisyed",
        },
        {
            url: "./Discovery/Pictures/Body/Items Layout/Item 6.jpg",
            title1: "3D Design - Fashion Retail Store",
            title2: "by shensh",
        },
        {
            url: "./Discovery/Pictures/Body/Items Layout/Item 7.jpg",
            title1: "Web Design for NZ Architects",
            title2: "by doomshellsl",
        },
        {
            url: "./Discovery/Pictures/Body/Items Layout/Item 8.jpg",
            title1: "Kawaii Cyberpunk Illustration",
            title2: "by stacheous",
        },
        {
            url: "./Discovery/Pictures/Body/Items Layout/Item 9.jpg",
            title1: "Wesbite Design for a Consumer Shop",
            title2: "by sneha15112018",
        },
        {
            url: "./Discovery/Pictures/Body/Items Layout/Item 10.jpg",
            title1: "Reusable Cup Designs",
            title2: "by Jefriprayudis",
        },
        {
            url: "./Discovery/Pictures/Body/Items Layout/Item 11.jpg",
            title1: "iOS App Design",
            title2: "by blackdahlia24",
        },
        {
            url: "./Discovery/Pictures/Body/Items Layout/Item 12.jpg",
            title1: "Spaceship - Logo Design",
            title2: "by dgpaolacastaneda",
        },
        {
            url: "./Discovery/Pictures/Body/Items Layout/Item 13.jpg",
            title1: "Design and Rebuild WordPress Site",
            title2: "by khubaib411",
        },
        {
            url: "./Discovery/Pictures/Body/Items Layout/Item 14.jpg",
            title1: "Gameboy - 3D Design",
            title2: "by daniellassche",
        },
        {
            url: "./Discovery/Pictures/Body/Items Layout/Item 15.jpg",
            title1: "Album Cover Design - Micha B.",
            title2: "by gradynelson",
        },
        {
            url: "./Discovery/Pictures/Body/Items Layout/Item 16.jpg",
            title1: "Shoe Design",
            title2: "by adalbertoperez",
        },
    ];
});

Origin.controller("jobsController", function ($scope, $http, Global) {
    $scope.global = Global;
    Global.title = "Freelance Jobs and Contests | Freelancer";

    // //////JOB POSTS ////////
    $http.get("./Jobs/jobs.json").then((response) => {
        $scope.jobPosts = response.data;
    });

    // ///////SEARCH LOG SERVICE///////////
    $scope.searchLog = [];

    $scope.recentSearch = (search) => {
        if ($scope.searchLog.length === 0) {
            $scope.searchLog.unshift(search);
            console.log($scope.searchLog);
        } else {
            let dupelicate = false;
            for (let i = 0; i < $scope.searchLog.length; i++) {
                if (search == $scope.searchLog[i]) {
                    dupelicate = true;
                    let index = $scope.searchLog.indexOf($scope.searchLog[i]);
                    if (index > -1) {
                        $scope.searchLog.splice(index, 1);
                        $scope.searchLog.unshift(search);
                    }
                }
            }
            if (!dupelicate) {
                $scope.searchLog.unshift(search);
            }
        }
    };

    // /////////DETAIL SERVICE///////////////
    $scope.presentDetails = (post) => {
        console.log("presentDetails" + Global.jobs_details);

        if (Global.jobs_details.length === 0) {
            Global.jobs_details.unshift(post);
        } else {
            let repeat = false;
            for (let i = 0; i < Global.jobs_details.length; i++) {
                if (Global.jobs_details[i].id === post.id) {
                    repeat = true;
                }
            }
            if (!repeat) {
                Global.jobs_details.unshift(post);
            }
        }
        console.log(Global.jobs_details);
    };
});

Origin.controller("jobs-detailController", function ($scope, $http, Global) {
    $scope.global = Global;
    Global.title = Global.jobs_details[0].title;
    Global.title += Global.jobs_details[0].skills.join("|");
});

Origin.controller("articlesController", function ($scope, $http, Global) {
    $scope.global = Global;
    Global.title = "How to hire a freelance accountant for your business | Freelancer";
});


Origin.controller("infoController", function ($scope, $http, Global) {
    $scope.global = Global;
    Global.title = "Freelancer - How it works | Freelancer";

    $scope.catalogue = [//{url: "", title1: "", title2: ""}
        {
            url: "./Media/logo-design-v2.jpg",
            title1: "Logo Design.",
            title2: "$30 USD in 1 day.",
        },
        {
            url: "./Media/package-design-1-v2.jpg",
            title1: "Package Design.",
            title2: "$280 USD in 4 days.",
        },
        {
            url: "./Media/mobile-design-1-v2.jpg",
            title1: "Mobile Design.",
            title2: "$600 USD in 4 days.",
        },
        {
            url: "./Media/wordpress-1.jpg",
            title1: "Wordpess.",
            title2: "$45 USD in 1 days.",
        },
        {
            url: "./Media/logo-design-2.jpg",
            title1: "Logo Design.",
            title2: "$30 USD in 1 days.",
        },
        {
            url: "./Media/website-1.jpg",
            title1: "Website.",
            title2: "$150 USD in 1 days.",
        },
    ];

    $http.get('../Info/info-card.json')
        .then(function (response) {
            $scope.cards = response.data.cards;
            console.log(response);
            $scope.cards2 = response.data.cards2;
            $scope.cards3 = response.data.cards3;
        });

    $scope.figureStyle = (url) => {
        return {
            background: "url(" + url + ")",
            "background-size": "cover",
            "background-position": "center",
            "background-repeat": "no-repeat",
            transition: "all 0.25s linear",
            display: "flex",
            width: "25vw",
            height: "20vw",
        };
    };
});
