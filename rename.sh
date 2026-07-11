#!/bin/bash
set -e
cd "$(dirname "$0")/portfolio"

echo "=== Создание целевых папок ==="
mkdir -p game poster-cat-day moodboards stickers photobook packaging retouch
mkdir -p digital-drawing/procreate/portraits digital-drawing/sticker-sketches digital-drawing/popular-blondes digital-drawing/character-comic

echo "=== Game ==="
mv 'дизайн игры платформер/заставка меню.jpg'         game/menu.jpg
mv 'дизайн игры платформер/персонаж концепт.jpg'       game/character-concept.jpg
mv 'дизайн игры платформер/раскадровка.jpg'            game/storyboard.jpg
mv 'дизайн игры платформер/фон1.jpg'                   game/bg-1.jpg
mv 'дизайн игры платформер/фон2.jpg'                   game/bg-2.jpg
mv 'дизайн игры платформер/фон3.jpg'                   game/bg-3.jpg
mv 'дизайн игры платформер/фон4.jpg'                   game/bg-4.jpg
mv 'дизайн игры платформер/экран выигрыша.jpg'         game/win-screen.jpg
mv 'дизайн игры платформер/экран проигрыша.jpg'        game/lose-screen.jpg

echo "=== Poster Cat Day ==="
mv 'дизайн постера и пригласительного «день кошек» спб/АФИША.ИТОГ.jpg'    poster-cat-day/poster-final.jpg
mv 'дизайн постера и пригласительного «день кошек» спб/БИЛЕТИК.итог.jpg'  poster-cat-day/ticket.jpg
mv 'дизайн постера и пригласительного «день кошек» спб/лого куз.jpg'      poster-cat-day/logo.jpg
mv 'дизайн постера и пригласительного «день кошек» спб/мокап1.jpg'        poster-cat-day/mockup-1.jpg
mv 'дизайн постера и пригласительного «день кошек» спб/мокап2.jpg'        poster-cat-day/mockup-2.jpg

echo "=== Moodboards ==="
mv 'мудборды/концепция.jpg'                                    moodboards/concept-1.jpg
mv 'мудборды/концепция2.jpg'                                   moodboards/concept-2.jpg
mv 'мудборды/мудборд для магазина косметики.jpg'               moodboards/cosmetics-shop.jpg
mv 'мудборды/мудборд кабинета для компании CD Project.jpg'     moodboards/office-cd-project.jpg
mv 'мудборды/мудборд кабинета для компании Mundfish.jpg'       moodboards/office-mundfish.jpg
mv 'мудборды/мудборд кабинета для компании Sony .jpg'          moodboards/office-sony.jpg
mv 'мудборды/мудборд кафе в стиле hello kitty.jpg'             moodboards/cafe-hello-kitty.jpg
mv 'мудборды/мудборд кафе в стиле киберпанк.jpg'               moodboards/cafe-cyberpunk.jpg
mv 'мудборды/мудборд кафе в стиле ретро.jpg'                   moodboards/cafe-retro.jpg
mv 'мудборды/мудборд кухни1.jpg'                               moodboards/kitchen-1.jpg
mv 'мудборды/мудборд кухни2.jpg'                               moodboards/kitchen-2.jpg
mv 'мудборды/мудборд кухни3.jpg'                               moodboards/kitchen-3.jpg

echo "=== Stickers ==="
mv 'персонаж для стикеров/Котик_Киви.jpg'          stickers/kiwi-cat.jpg
mv 'персонаж для стикеров/персонаж вар1.jpg'        stickers/character-var-1.jpg
mv 'персонаж для стикеров/персонаж вар2-1.jpg'      stickers/character-var-2-1.jpg
mv 'персонаж для стикеров/персонаж вар2.jpg'        stickers/character-var-2.jpg

echo "=== Photobook ==="
mv 'проект фотокниги "3:00"/ФОТОКНИГА. ИТОГ. КУЗЮКОВА.pdf' photobook/photobook-final.pdf

echo "=== Packaging ==="
mv 'разработка упаковки/БУКЛЕТ_ИТОГ.pdf'                      packaging/booklet-final.pdf
mv 'разработка упаковки/ЛОГО1.png'                             packaging/logo-1.png
mv 'разработка упаковки/ЛОГО12.jpg'                            packaging/logo-1-color.jpg
mv 'разработка упаковки/ЛОГО2.png'                             packaging/logo-2.png
mv 'разработка упаковки/ПЛАКАТ.png'                            packaging/poster.png
mv 'разработка упаковки/Разработка_концепций_Кузюкова_Ксю.pdf' packaging/concept-development.pdf
mv 'разработка упаковки/витрина.jpg'                           packaging/storefront.jpg
mv 'разработка упаковки/концепция.png'                         packaging/concept.png
mv 'разработка упаковки/мокап.jpg'                             packaging/mockup.jpg
mv 'разработка упаковки/развертка упаковки.jpg'                packaging/packaging-net.jpg

echo "=== Retouch ==="
mv 'ретушь фото/ретуш фото хронология.jpg' retouch/retouch-timeline.jpg

echo "=== Digital Drawing / Procreate Portraits ==="
mv 'цифровой рисунок/procreate/портреты/Гифт_обложка1.jpg'  digital-drawing/procreate/portraits/gift-cover-1.jpg
mv 'цифровой рисунок/procreate/портреты/Гифт_обложка2.jpg'  digital-drawing/procreate/portraits/gift-cover-2.jpg
mv 'цифровой рисунок/procreate/портреты/Кудри.jpg'          digital-drawing/procreate/portraits/curls.jpg
mv 'цифровой рисунок/procreate/портреты/Портрет_ЛДР1.jpg'   digital-drawing/procreate/portraits/portrait-ldr-1.jpg
mv 'цифровой рисунок/procreate/портреты/Портрет_Мия_Гот.jpg' digital-drawing/procreate/portraits/portrait-mia-goth.jpg
mv 'цифровой рисунок/procreate/портреты/портрет ЛДР.jpg'    digital-drawing/procreate/portraits/portrait-ldr.jpg

echo "=== Digital Drawing / Procreate ==="
mv 'цифровой рисунок/procreate/Девушка с наушниками.jpg' digital-drawing/procreate/girl-headphones.jpg
mv 'цифровой рисунок/procreate/Падме на розовом фоне.jpg' digital-drawing/procreate/padme-pink.jpg
mv 'цифровой рисунок/procreate/Портрет ЛДР2.jpg'         digital-drawing/procreate/portrait-ldr-2.jpg
mv 'цифровой рисунок/procreate/Принцесса.jpg'            digital-drawing/procreate/princess.jpg
mv 'цифровой рисунок/procreate/абстракция скаты.jpg'     digital-drawing/procreate/stingray-abstract.jpg
mv 'цифровой рисунок/procreate/акцентный грим.jpg'       digital-drawing/procreate/accent-makeup.jpg

echo "=== Digital Drawing / Sticker Sketches ==="
mv 'цифровой рисунок/наклейки/вариант наклеек чб.jpg' digital-drawing/sticker-sketches/sticker-variant-bw.jpg

echo "=== Digital Drawing / Popular Blondes ==="
mv 'цифровой рисунок/проект "Популярные блондинки"/Открытка_А6_Марго_Робби.jpg'  digital-drawing/popular-blondes/postcard-margot.jpg
mv 'цифровой рисунок/проект "Популярные блондинки"/Ссылка на страницу проекта.PNG' digital-drawing/popular-blondes/project-link.png
mv 'цифровой рисунок/проект "Популярные блондинки"/Страница_А5_Реджина_Джордж.jpg' digital-drawing/popular-blondes/page-regina.jpg

echo "=== Digital Drawing / Character Comic ==="
mv 'цифровой рисунок/разработка персонажа + комикс/комикс 1 вариант.jpg'    digital-drawing/character-comic/comic-var-1.jpg
mv 'цифровой рисунок/разработка персонажа + комикс/комикс 2 вариант.jpg'    digital-drawing/character-comic/comic-var-2.jpg
mv 'цифровой рисунок/разработка персонажа + комикс/персонаж скат.jpg'      digital-drawing/character-comic/stingray-character.jpg

echo "=== Digital Drawing / root files ==="
mv 'цифровой рисунок/арт под роспись стены1.jpg' digital-drawing/wall-art-1.jpg
mv 'цифровой рисунок/арт под роспись стены2.jpg' digital-drawing/wall-art-2.jpg

echo "=== Удаление старых папок ==="
rmdir 'дизайн игры платформер' 2>/dev/null || true
rmdir 'дизайн постера и пригласительного «день кошек» спб' 2>/dev/null || true
rmdir 'мудборды' 2>/dev/null || true
rmdir 'персонаж для стикеров' 2>/dev/null || true
rmdir 'проект фотокниги "3:00"' 2>/dev/null || true
rmdir 'разработка упаковки' 2>/dev/null || true
rmdir 'ретушь фото' 2>/dev/null || true
rmdir 'цифровой рисунок/procreate/портреты' 2>/dev/null || true
rmdir 'цифровой рисунок/procreate' 2>/dev/null || true
rmdir 'цифровой рисунок/наклейки' 2>/dev/null || true
rmdir 'цифровой рисунок/проект "Популярные блондинки"' 2>/dev/null || true
rmdir 'цифровой рисунок/разработка персонажа + комикс' 2>/dev/null || true
rmdir 'цифровой рисунок' 2>/dev/null || true

echo ""
echo "=== Готово. Проверка структуры: ==="
find . -type f | sort
