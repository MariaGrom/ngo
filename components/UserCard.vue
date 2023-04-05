<template>
    <article class="card">
        <img class="image" src="https://randomuser.me/api/portraits/men/61.jpg">
        <div class="text">
            <h2>Mark Twen</h2>
            <em class="email">mark@twen.uk</em>
            <p>London</p>
        </div>
    </article>
</template>

<script>
export default {

}
</script>

<style scoped>
.card{
    width: 200px;
    height: 350px;
    margin: 30px;
    background: white;
    border-radius: 10px;
}

.image{
    width:100%;
    border-radius: 10px 10px 0 0;
}

.text{
    height: 40%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}

.email{
    margin: 10px 0;
}

</style>