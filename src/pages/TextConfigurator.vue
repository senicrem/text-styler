<template>
	<div class="bg-gray-200">
		<div class="grid grid-cols-[300px_1fr] h-screen">
			<div class="w-full bg-white py-10 px-5 flex gap-5 flex-col h-screen overflow-auto">
				<div class="">
					<span class="block font-bold">Name</span>
					<input :class="styleInputText()" type="text" v-model.lazy="textSettings.name"  />
				</div>
				<div>
					<span class="block font-bold">Size</span>
					<input :class="styleInputText()" type="number" v-model="textSettings.size">
				</div>
				<div>
					<span class="block font-bold">Color</span>
					<input type="color" class="w-full" v-model="textSettings.color">
				</div>
				<div>
					<span class="block font-bold"><input type="checkbox" v-model="textSettings.gradient.active"/> Gradient</span>
					<div class="w-full bg-gray-300 p-2 pl-4 text-sm flex" v-if="!textSettings.gradient.active">
						<span>None</span>
					</div>
					<div v-else>
						<div class="ml-4">
							<span class="text-xs font-bold">Color 1</span>
							<input type="color" class="w-full cursor-pointer" v-model="textSettings.gradient.color1">
						</div>
						<div class="ml-4">
							<span class="text-xs font-bold">Color 2</span>
							<input type="color" class="w-full cursor-pointer" v-model="textSettings.gradient.color2">
						</div>
					</div>
				</div>
				<div>
					<span class="block font-bold">Weight</span>
					<input class="w-full" type="range" v-model="textSettings.weight" min="200" max="1000">
				</div>
				<div>
					<span class="block font-bold"><input type="checkbox" v-model="textSettings.stroke.active"/> Stroke</span>
					<div class="w-full bg-gray-300 p-2 pl-4 text-sm flex" v-if="!textSettings.stroke.active">
						<span>None</span>
					</div>
					<div v-else>
						<div class="ml-4">
							<span class="text-xs font-bold">Color</span>
							<input type="color" class="w-full cursor-pointer" v-model="textSettings.stroke.color">
						</div>
						<div class="ml-4">
							<span class="text-xs font-bold">Width</span>
							<input :class="styleInputText()" type="number" v-model="textSettings.stroke.width">
						</div>
					</div>
				</div>
				<div>
					<span class="block font-bold">Font Family</span>
					<select :class="styleInputText()" v-model="textSettings.family">
						<option v-for="x in FONTS" :value="x.family">{{ x.name }}</option>
					</select>
				</div>
				<div>
					<span class="block font-bold"><input type="checkbox" v-model="textSettings.shadow.active"/> Shadow</span>
					<div class="w-full bg-gray-300 p-2 pl-4 text-sm flex" v-if="!textSettings.shadow.active">
						<span>None</span>
					</div>
					<div class="space-y-2" v-else>
						<div class="ml-4">
							<span class="text-xs font-bold">Color</span>
							<input type="color" class="w-full cursor-pointer" v-model="textSettings.shadow.color">
						</div>
						<div class="ml-4">
							<span class="text-xs font-bold">Horizontal Offset</span>
							<input :class="styleInputText()" type="number" v-model="textSettings.shadow.horizontalOffset" placeholder="horizontal offset">
						</div>
						<div class="ml-4">
							<span class="text-xs font-bold">Vertical Offset</span>
							<input :class="styleInputText()" type="number" v-model="textSettings.shadow.verticalOffset" placeholder="vertical offset">
						</div>
						<div class="ml-4">
							<span class="text-xs font-bold">Blur Radius</span>
							<input :class="styleInputText()" type="number" v-model="textSettings.shadow.blurRadius" placeholder="Blur Radius">
						</div>
					</div>
				</div>
				<div>
					<span class="block font-bold">Letter Spacing</span>
					<input class="w-full" type="range" v-model="textSettings.letterSpacing" min="-50" max="50">
				</div>
				<div>
					<span class="block font-bold">Transform</span>
					<select :class="styleInputText()" v-model="textSettings.transform">
						<option v-for="opt in TRANSFORM_OPTIONS" :value="opt" class="capitalize">{{ opt }}</option>
					</select>
				</div>
				<div>
					<span class="block font-bold">Decorations</span>
					<select :class="styleInputText()" v-model="textSettings.decoration">
						<option v-for="decor in DECORATION_OPTIONS" :value="decor" class="capitalize">{{ decor }}</option>
					</select>
				</div>
			</div>
			<div class="w-full flex items-center justify-center h-full">
				<p :style="textStyles" class="roboto">{{ textSettings.name }}</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
const FONTS = [
	{ name: "Roboto", family: "Roboto" },
	{ name: "Open Sans", family: "Open Sans" },
	{ name: "Lato", family: "Lato" },
	{ name: "Montserrat", family: "Montserrat" },
	{ name: "Poppins", family: "Poppins" },
	{ name: "Raleway", family: "Raleway" },
	{ name: "Oswald", family: "Oswald" },
	{ name: "Merriweather", family: "Merriweather" },
	{ name: "Playfair Display", family: "Playfair Display" },
]

const TRANSFORM_OPTIONS = [
	'none',
	'uppercase',
	'lowercase',
	'capitalize',
	'full-width'
]

const DECORATION_OPTIONS = [
	'none',
	'underline',
	'overline',
	'line-through'
]

const textSettings = reactive({
	name: "Hello World",
	size: '5',
	color: '#313131',
	weight: '700',
	stroke: {
		active: false,
		color: '#4ef109',
		width: 2
	},
	shadow: {
		active: false,
		horizontalOffset: 5,
		verticalOffset: 5,
		blurRadius: 5,
		color: "#44569c"
	},
	family: "Roboto",
	letterSpacing: 0,
	gradient: {
		active: false,
		color1: "#0028f0",
		color2: "#fe01e9"
	},
	transform: "none",
	decoration: "none"
});

const textStyles = computed(() => {
	const { stroke, shadow, gradient } = textSettings;
	const result = {
		fontSize: textSettings.size + 'rem',
		color: textSettings.color,
		fontWeight: textSettings.weight,
		fontFamily: `${textSettings.family}, serif`,
		letterSpacing: `${textSettings.letterSpacing}px`,
		textTransform: textSettings.transform,
		textDecoration: textSettings.decoration
	}
	
	if (stroke.active) {
		result["-webkit-text-stroke"] = `${stroke.width}px ${stroke.color}`
	}

	if (shadow.active) {
		result['text-shadow'] = `${shadow.horizontalOffset}px ${shadow.verticalOffset}px ${shadow.blurRadius}px ${shadow.color}`
	}

	if (gradient.active) {
		result['background'] = `linear-gradient(${gradient.color1}, ${gradient.color2})`
		result['color'] = `transparent`
		result['background-clip'] = `text`	
	}
 
	return result;
})

const styleInputText = () => ("bg-gray-200 w-full text-sm px-3 py-2 border-0")

</script>

<style scoped>
	@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Oswald:wght@200..700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900');
</style>