#include <stdio.h>

int main()
{
    int n = 10;
    int *m = &n;
    n = 30;

    printf("%d %d", n, *m);

    return 0;
}