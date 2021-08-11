$(() => {
    const clearMsg = () => $("#msg").text("");
    const sentSuccess = (data) => {
        $("#productId").val("");
        $("#msg").text("Currently total of " + data.numberOfProducts + "products in the cart.");
        $("#productId").focus();
        setTimeout(clearMsg, 3000);
    }
    const noSuccess = () => {
        $("#msg").text("Unable to reach server");
        setTimeout(clearMsg, 10000);
    }

    $("#addToCart").submit(() => {
        const data = {
            productId: $("#productId").val()
        };
        $.post({
            url: "/8ball",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8"
        }).done(sentSuccess)
            .fail(noSuccess);
        return false;
    });
});