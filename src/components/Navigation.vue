<template>
    <div class="navigation">
        <b-navbar class="navigation__content" toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="#">여기로</b-navbar-brand>
            <b-form-input class="navigation__input" placeholder="식당명, 지명 등"></b-form-input>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'Navigation',
}
</script>

<style scoped>

.navigation__content {
    padding: 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navigation__input {
    width: 500px;
}
</style>
