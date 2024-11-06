document.getElementById("calculateButton").addEventListener("click", function() {
    const quantity = document.getElementById("quantity").value;
    const productPrice = document.getElementById("product").value;

    const totalCost = quantity * productPrice;

    document.getElementById("result").innerText = `Стоимость заказа: ${totalCost} рублей`;
});