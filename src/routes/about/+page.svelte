<script lang="ts">

	import { theme } from '$lib/theme'

	let avatarUrl = "avatar_dark.webp" ;

	// Reactive statement to update the image URL based on the theme
	$: if ($theme === 'forest') {
		avatarUrl = 'avatar_dark.webp';
	} else if ($theme === 'digitalSunrise') {
		avatarUrl = 'avatar_light.webp';
	}

</script>

<div class="container mx-auto m-20">
	<div class="flex gap-12">
		<!-- Avatar Image -->
		<div class="w-80 h-80 mr-4">
			<img src={ avatarUrl } alt="Your Name" class="rounded-full border-2 border-white shadow-lg"/>
		</div>

		<!-- About Text -->
		<div class="ml-4">
			<h1 class="text-2xl font-bold">About Me</h1>
<!--			<p class="text-gray-600 mt-2">-->
<!--				Your description goes here. Talk about your background, experience,-->
<!--				hobbies, interests, or anything else you'd like to share. </p>-->
			<p class="mt-2">Full Stack Developer with over 10 years of experience in building and optimizing web solutions to drive business growth and operational efficiency. Skilled in developing high-performance, scalable architectures and seamless API integrations, consistently enhancing performance metrics and user experience. Proficient in both front and back-end development, utilizing modern JavaScript libraries and frameworks, and well-versed in various content management systems. Recognized for leading teams in complex projects, significantly improving system functionalities and streamlining development processes.</p>
			<p class="mt-2">Passionate about leveraging technology to address environmental and conservation challenges, with a strong interest in geospatial tools and solutions. Committed to contributing my web development expertise to projects that promote sustainability and improve outdoor experiences. Dedicated to supporting causes such as hunter rights advocacy.</p>

		</div>
	</div>
</div>