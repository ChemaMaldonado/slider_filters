const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);
        
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});

// 'Show more' button for each filter.
// Brands
const btn_brand = document.getElementById('show_more_brand')
const brand_1 = document.getElementById('linux_4_container')
const brand_2 = document.getElementById('linux_5_container')
const brand_3 = document.getElementById('linux_6_container')
const brand_4 = document.getElementById('linux_7_container')

const brands = [brand_1, brand_2, brand_3, brand_4]


btn_brand.addEventListener('click', function handleClick() {
	brands.map((brand) => {
		if (brand.style.display === 'none') {
			brand.style.display = 'block'
			btn_brand.textContent = 'Cerrar'
		} else {
			brand.style.display = 'none'
			btn_brand.textContent = 'Ver más'
		}
	})
})

// Size
const btn_size = document.getElementById('show_more_size')
const size_1 = document.getElementById('linux_4_container_size')
const size_2 = document.getElementById('linux_5_container_size')
const size_3 = document.getElementById('linux_6_container_size')
const size_4 = document.getElementById('linux_7_container_size')

const sizes = [size_1, size_2, size_3, size_4]


btn_size.addEventListener('click', function handleClick() {
	sizes.map((size) => {
		if (size.style.display === 'none') {
			size.style.display = 'block'
			btn_size.textContent = 'Cerrar'
		} else {
			size.style.display = 'none'
			btn_size.textContent = 'Ver más'
		}
	})
})

// Model
const btn_model = document.getElementById('show_more_model')
const model_1 = document.getElementById('linux_4_container_model')
const model_2 = document.getElementById('linux_5_container_model')
const model_3 = document.getElementById('linux_6_container_model')
const model_4 = document.getElementById('linux_7_container_model')

const models = [model_1, model_2, model_3, model_4]


btn_model.addEventListener('click', function handleClick() {
	models.map((model) => {
		if (model.style.display === 'none') {
			model.style.display = 'block'
			btn_model.textContent = 'Cerrar'
		} else {
			model.style.display = 'none'
			btn_model.textContent = 'Ver más'
		}
	})
})



// '+ Filters' button at the bottom.
const btn_filters = document.getElementById('show_more');
const filter_1 = document.getElementById('filter_3');

const filters_header = [filter_1]


btn_filters.addEventListener('click', function handleClick() {
	filters_header.map((filter) => {
		if (filter.style.display === 'none') {
			filter.style.display = 'block';
			btn_filters.textContent = 'Cerrar';
		} else {
			filter.style.display = 'none';
			btn_filters.textContent = '+ Filtros';
		}
	})
});