import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import HeaderLesson from '../../shared/HeaderLesson/HeaderLesson';
import withSidebar from '../../widgets/hoc/withSidebar';
import AnimatedPage from '../../shared/AnimatedPage/AnimatedPage';

function Lecture() {
  return (
    <AnimatedPage>
      <Box mt={4} ml={5} width="100%" height="100%">
        <HeaderLesson title="Алгоритмизация" />

        <Stack direction="column" mt={6}>
          <Typography fontSize="30px">Алгоритм быстрой сортировки</Typography>

          <Box width="90%" mt={4} fontWeight="bold">
            <Typography fontSize="22px">
              Алгоритм быстрой сортировки является рекурсивным, поэтому для
              простоты процедура на вход будет принимать границы участка массива
              от l включительно и до r не включительно. Понятно, что для того,
              чтобы отсортировать весь массив, в качестве параметра l надо
              передать 0, а в качестве r — n, где по традиции n обозначает длину
              массива.В основе алгоритма быстрой сортировке лежит процедура
              partition. Partition выбирает некоторый элемент массива и
              переставляет элементы участка массива таким образом, чтобы массив
              разбился на 2 части: левая часть содержит элементы, которые меньше
              этого элемента, а правая часть содержит элементы, которые больше или
              равны этого элемента. Такой разделяющий элемент называется пивотом.
            </Typography>
          </Box>

          <Box mt={6}>
            <Typography fontSize="24px">
              Реализация быстрой сортировки на языке Bizon
            </Typography>
            <Box mt={4}>
              <Box width="100px" height="150px">
                <svg
                  width="361"
                  height="193"
                  viewBox="0 0 361 193"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="360"
                    height="192"
                    fill="url(#pattern0)"
                    stroke="black"
                  />
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_37_263"
                        transform="scale(0.00277008 0.00518135)"
                      />
                    </pattern>
                    <image
                      id="image0_37_263"
                      width="361"
                      height="193"
                      xlinkHref="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              </Box>
            </Box>
          </Box>

          <Box mt={8} width="90%">
            <Typography fontSize="22px">
              Временная сложность алгоритма выражается через нее же по формуле:
              T(n) = n + T(a * n) + T((1 — a) * n). Таким образом, когда мы
              вызываем сортировку массива из n элементов, тратится порядка n
              операций на выполнение partition и на выполнения себя же 2 раза с
              параметрами a * n и (1 — a) * n, потому что пивот разделил элемент
              на доли.
            </Typography>
          </Box>
        </Stack>
      </Box>
    </AnimatedPage>
  );
}

export default withSidebar(Lecture);
