import allFilterIcon from './assets/filters/all.png';
import fastFood from './assets/filters/fastFood.png'
import desert from './assets/filters/desert.png'
import beverages from './assets/filters/Beverages.png';
import Appetizers from './assets/filters/appetizers.png';
import mainCourse from './assets/filters/mainCourse.png'
import seaFood from './assets/filters/seaFood.png'
import Pasta from './assets/filters/Pasta.png'
import pizza from './assets/filters/pizza.png'
interface Filter {
    title: string;
    imageIcon: string;
}

const filters: Filter[] = [
    { title: "All", imageIcon: allFilterIcon },
    { title: "Main Course", imageIcon: mainCourse },
    { title: "Appetizers", imageIcon: Appetizers },
    { title: "Fast Food", imageIcon: fastFood },
    { title: "Desserts", imageIcon: desert },
    { title: "Beverages", imageIcon: beverages },
    { title: "Seafood", imageIcon: seaFood },
    { title: "Pasta", imageIcon: Pasta },
    { title: "Pizza", imageIcon: pizza },
    { title: "Soups", imageIcon: allFilterIcon },
    { title: "Salads", imageIcon: allFilterIcon },
    { title: "Grilled Items", imageIcon: allFilterIcon },
    { title: "Sides", imageIcon: allFilterIcon },
    { title: "Kids' Menu", imageIcon: allFilterIcon },
    { title: "Wraps", imageIcon: allFilterIcon },
    { title: "Burgers", imageIcon: allFilterIcon },
    { title: "Sandwiches", imageIcon: allFilterIcon },
    { title: "Combos", imageIcon: allFilterIcon },
    { title: "Specials", imageIcon: allFilterIcon },
    { title: "Chef’s Recommendations", imageIcon: allFilterIcon },
    { title: "Seasonal", imageIcon: allFilterIcon },
    { title: "Bakery Items", imageIcon: allFilterIcon },
    { title: "Gluten-Free", imageIcon: allFilterIcon },
    { title: "Alcoholic Beverages", imageIcon: allFilterIcon },
];


export default filters;
