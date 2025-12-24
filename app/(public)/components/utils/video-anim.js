function videoAnimOne() {
	if ($('.tp-hero-bottom-img-wrap').length > 0) {
		let ms = gsap.matchMedia();
		ms.add("(min-width: 768px)", () => {
			let tp_hero = gsap.timeline({
				scrollTrigger: {
					trigger: ".tp-hero-bottom-img-wrap",
					start: "top 70",
					pin: true,
					markers: false,
					scrub: 1,
					pinSpacing: false,
					end: "bottom 50%",
				}
			});
			tp_hero.to(".tp-hero-bottom-img", {
				width: "100%",
			});
		});
	}
};

export {
	videoAnimOne
}