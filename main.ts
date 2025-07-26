let 수1 = 0
let 수2 = 0
let 답 = 0
let 만보계 = 0
blocks.onBlockBroken(DIAMOND_ORE, function () {
    player.execute(
    "scoreboard players add @s Money 700"
    )
})
mobs.onMobKilled(WOLF, function () {
    player.execute(
    "scoreboard players add @s Money 350"
    )
})
mobs.onMobKilled(mobs.monster(ENDERMAN), function () {
    player.execute(
    "scoreboard players add @s Money 500"
    )
})
mobs.onMobKilled(mobs.monster(ZOMBIE), function () {
    player.execute(
    "scoreboard players add @s Money 150"
    )
})
blocks.onBlockBroken(COAL_ORE, function () {
    player.execute(
    "scoreboard players add @s Money 100"
    )
})
// 게임 진행자 코드
player.onChat("8", function () {
    player.execute(
    "scoreboard objectives remove Money"
    )
    player.execute(
    "scoreboard objectives remove Happy"
    )
})
blocks.onBlockBroken(REDSTONE_ORE, function () {
    player.execute(
    "scoreboard players add @s Money 400"
    )
})
mobs.onMobKilled(COW, function () {
    player.execute(
    "scoreboard players add @s Money 200"
    )
})
mobs.onMobKilled(SHEEP, function () {
    player.execute(
    "scoreboard players add @s Money 150"
    )
})
blocks.onBlockBroken(STONE, function () {
    player.execute(
    "scoreboard players add @s Money 1"
    )
})
mobs.onMobKilled(mobs.monster(SPIDER), function () {
    player.execute(
    "scoreboard players add @s Money 150"
    )
})
// 게임 진행자 코드
loops.forever(function () {
    player.execute(
    "kill @a[scores={Money=..-1}]"
    )
    loops.pause(60000)
})
loops.forever(function () {
    if (blocks.testForBlock(END_PORTAL, pos(0, -1, 0))) {
        player.execute(
        "scoreboard players remove @s Happy 20"
        )
    }
})
blocks.onBlockBroken(TALLGRASS, function () {
    player.execute(
    "scoreboard players add @s Money 1"
    )
})
player.onChat("1", function () {
    수1 = randint(10, 99)
    수2 = randint(1, 10)
    player.tell(mobs.target(LOCAL_PLAYER), "" + 수1 + "곱하기" + 수2)
    답 = 수1 * 수2
})
mobs.onMobKilled(mobs.monster(CREEPER), function () {
    player.execute(
    "scoreboard players add @s Money 200"
    )
})
// 진행자 코드
player.onChat("9", function () {
    gameplay.title(mobs.target(ALL_PLAYERS), "마크심즈", "게임을 시작합니다.")
    gameplay.setDifficulty(HARD)
    gameplay.setGameRule(PV_P, false)
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(ALL_PLAYERS)
    )
    mobs.give(
    mobs.target(ALL_PLAYERS),
    EMPTY_LOCATOR_MAP,
    5
    )
    player.execute(
    "scoreboard objectives add Happy dummy 행복도"
    )
    player.execute(
    "scoreboard players set @a Happy 100"
    )
    player.execute(
    "scoreboard objectives setdisplay belowname Happy"
    )
    player.execute(
    "scoreboard objectives setdisplay list Happy"
    )
    player.execute(
    "scoreboard objectives add Money dummy 골드"
    )
    player.execute(
    "scoreboard players set @a Money 10"
    )
    player.execute(
    "scoreboard objectives setdisplay sidebar Money"
    )
})
player.onTravelled(SPRINT, function () {
    만보계 += 1
    if (0 == 만보계 % 5) {
        player.execute(
        "scoreboard players add @s Money 5"
        )
    }
    loops.pause(1000)
})
mobs.onMobKilled(PIG, function () {
    player.execute(
    "scoreboard players add @s Money 150"
    )
})
mobs.onMobKilled(RABBIT, function () {
    player.execute(
    "scoreboard players add @s Money 300"
    )
})
blocks.onBlockBroken(DOUBLE_TALLGRASS, function () {
    player.execute(
    "scoreboard players add @s Money 2"
    )
})
mobs.onMobKilled(HORSE, function () {
    player.execute(
    "scoreboard players add @s Money 300"
    )
})
mobs.onMobKilled(mobs.monster(SKELETON), function () {
    player.execute(
    "scoreboard players add @s Money 200"
    )
})
player.onChat("답", function (입력값) {
    if (입력값 == 답) {
        player.tell(mobs.target(LOCAL_PLAYER), "정답이다!")
        player.execute(
        "scoreboard players add @s Happy 10"
        )
        player.execute(
        "scoreboard players add @s Money 50"
        )
        답 = randint(1, 100)
    } else {
        player.tell(mobs.target(LOCAL_PLAYER), "틀렸나보다...")
        player.execute(
        "scoreboard players remove @s Happy 50"
        )
    }
})
mobs.onMobKilled(CHICKEN, function () {
    player.execute(
    "scoreboard players add @s Money 150"
    )
})
