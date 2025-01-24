<script setup>
import { ref, reactive, computed } from "vue";
const onNightMode = ref(false);
const textSettings = reactive({
	name: "Hello World",
	size: '5',
	color: 'black',
	weight: '700',
	stroke: {
		active: false,
		color: 'red',
		width: 2
	}
});

const changeDisplayMode = () => {
	onNightMode.value = !onNightMode.value;
}

const textStyles = computed(() => {
	const { stroke } = textSettings;
	const result = {
		fontSize: textSettings.size + 'rem',
		color: textSettings.color,
		fontWeight: textSettings.weight
	}
	
	if (stroke.active) {
		result["-webkit-text-stroke"] = `${stroke.width}px ${stroke.color}`
	}

	
	return result;
})

const styleInputText = () => ("bg-gray-200 text-sm px-3 py-2 border-0")

</script>

<template>
<div class="h-screen bg-gray-200">
	<div>
		<div class="w-full flex items-center justify-center h-[24rem] overflow-x-auto">
			<p :style="textStyles" class="">{{ textSettings.name }}</p>
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

			</div>
		</div>
	</div>
</div>
</template>