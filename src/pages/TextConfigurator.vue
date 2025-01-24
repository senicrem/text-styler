<template>
	<div class="h-screen bg-gray-200">
		<div>
			<div class="w-full flex items-center justify-center h-[24rem] overflow-x-auto">
				<p :style="textStyles" class="roboto">{{ textSettings.name }}</p>
			</div>
	
			<div class="w-full bg-white py-10 px-5 flex gap-2">
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
					<input type="color" v-model="textSettings.color">
				</div>
				<div>
					<span class="block font-bold">Weight</span>
					<input type="range" v-model="textSettings.weight" min="200" max="1000">
				</div>
				<div>
					<span class="block font-bold"><input type="checkbox" v-model="textSettings.stroke.active"/> Stroke</span>
					<span v-if="!textSettings.stroke.active">None</span>
					<div v-else>
						<input type="color" v-model="textSettings.stroke.color">
						<input type="number" v-model="textSettings.stroke.width">
					</div>
				</div><div>
					<span class="block font-bold">Weight</span>
					<input type="range" v-model="textSettings.weight" min="200" max="1000">
				</div>
				<div>
					<span class="block font-bold">Font Family</span>
					<select v-model="textSettings.family">
						<option v-for="x in FONTS" :value="x.family">{{ x.name }}</option>
					</select>
				</div>
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

const textSettings = reactive({
	name: "Hello World",
	size: '5',
	color: 'black',
	weight: '700',
	stroke: {
		active: false,
		color: 'red',
		width: 2
	},
	family: "Roboto"
});

const textStyles = computed(() => {
	const { stroke } = textSettings;
	const result = {
		fontSize: textSettings.size + 'rem',
		color: textSettings.color,
		fontWeight: textSettings.weight,
		fontFamily: `${textSettings.family}, serif`
	}
	
	if (stroke.active) {
		result["-webkit-text-stroke"] = `${stroke.width}px ${stroke.color}`
	}

	return result;
})

const styleInputText = () => ("bg-gray-200 text-sm px-3 py-2 border-0")

</script>

<style scoped>
	@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Oswald:wght@200..700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900');
</style>