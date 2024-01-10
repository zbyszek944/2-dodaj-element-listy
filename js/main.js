console.log(document.querySelector('button'));

document.querySelector('button').addEventListener('click', () => {
     
        
        const itemList = document.getElementById('items');
        const itemCount = itemList.getElementsByTagName('li').length + 1;

        
        const newItem = document.createElement('li');
        newItem.className = 'item';
        newItem.textContent = `Item ${itemCount}`;

        
        itemList.appendChild(newItem);
    
});