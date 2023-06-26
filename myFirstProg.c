#include <stdio.h>

int main()
{
    // 123 / 10 = 12
    int x;
    int sum = 0;
    scanf("%d", &x);
    int temp = x;

    while (temp > 0)
    {
        sum = sum + (temp % 10);
        temp /= 10;
    }

    printf("%d", sum);

    return 0;
}