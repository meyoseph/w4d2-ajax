$(() => {
    const clearMsg = () => $("#msg").text("");
    const sentSuccess = (data) => {
        $("#question").val(data.list[0]);
        $("#msg").text("Data sent to server successfully");
        $("#question").focus();
        setTimeout(clearMsg, 3000);
    }
    const noSuccess = () => {
        $("#msg").text("Unable to reach server");
        setTimeout(clearMsg, 10000);
    }

    $("#8ball").submit(() => {
        const data = {
            question: $("#question").val()
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