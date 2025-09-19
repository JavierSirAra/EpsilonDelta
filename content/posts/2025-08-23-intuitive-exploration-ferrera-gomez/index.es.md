+++
title = "Una Exploración Intuitiva de la Clase Generalizada de Takagi"
date = 2025-08-23T23:39:22+02:00
draft = false
description = "Una aproximación paso a paso e intuitiva a la clase de Takagi generalizada de Ferrera–Gómez, donde descubriremos el modelo mental que empuja el desarrollo matemático."
tags = ["analysis"]
categories = ["analysis"]
math = true
featured_image = "/images/takagi-thumbnail.png"
summary = "Explora el fascinante mundo de la clase Generalizadade de Takagi Generalizada de Ferrera–Gómez con un enfoque intuitivo que muestra cómo definiciones sencillas pueden esconder un comportamiento matemático sorprendentemente complejo."
+++
<!-- Contenido -->

## Prólogo

La función de Takagi, introducida en 1903, es desde hace más de un siglo un ejemplo emblemático de cómo una definición sencilla puede esconder un comportamiento sorprendentemente complejo. Se construye a partir de la onda triangular y es famosa por ser continua en todo punto pero no derivable en ninguno; una pieza clave en el estudio de funciones patológicas que ilustra los límites sutiles entre continuidad y derivabilidad en análisis.

Ahora bien, el progreso en matemáticas a menudo surge de preguntarse: *¿y si relajamos las reglas?* ¿Qué ocurre si sustituimos los coeficientes rígidos de la función de Takagi clásica por una secuencia flexible de pesos, o si ampliamos la estructura base para incluir secuencias de subconjuntos que llenen densamente el intervalo $[0,1]$? Con estas variaciones, pasamos de una sola función a toda una **clase** de funciones cuya geometría puede ir de extremadamente irregular a inesperadamente regular, según los parámetros.

Ese paisaje ampliado es precisamente lo que explora la **clase de Takagi generalizada de Ferrera–Gómez**. Partiendo de la clase de Takagi y extendiéndola mediante secuencias crecientes de subconjuntos finitos de $[0,1]$, Ferrera y Gómez llevan las propiedades esenciales de la curva de Takagi a una familia muy amplia de funciones.

El objetivo de este artículo es ofrecer un acercamiento paso a paso y muy intuitivo a esta generalización. En lugar de presentar la teoría en su versión más técnica, vamos a:

- **Presentar** la función de Takagi clásica para identificar las ideas que impulsan su construcción.
- **Ampliar** el marco de forma gradual, introduciendo secuencias de pesos no negativos y destacando su papel en la forma de la función.
- **Explorar** cómo el uso de subconjuntos densos de $[0,1]$ conduce de manera natural a la clase de Ferrera–Gómez.

La idea es usar la función de Takagi como excusa para adentrarnos en una forma de pensar clave a la hora de construir matemáticas: la **generalización**. Recorreremos el camino desde la función clásica hasta su generalización moderna de forma clara y cercana, sin perder el rigor. Al final, el marco de Ferrera–Gómez no debería parecer una extensión caprichosa o arbitraria, sino una generalización natural y elegante de uno de los objetos más icónicos del análisis real.

## 1. Introducción: ¿Qué es la función de Takagi?

La forma más simple de definir la función de Takagi es:

$$
T(x) = \sum_{n=0}^{\infty} \frac{1}{2^n}\,\phi(2^n x),
$$

donde $\phi(x)$ denota la distancia de $x$ al entero más cercano:

$$
\phi(x) = \min_{k \in \mathbb{Z}} |x - k|.
$$

*(Para $x\in[0,1]$, basta con poner $\phi(x)=\min(x,1-x)$).*

Es decir, $\phi(x)$ no es más que una **onda triangular**, con picos en los semienteros $k+\tfrac12$ y valles en los enteros $k\in\mathbb Z$. Así, para $n=0$ el primer sumando tiene esta forma:

{{< figure src="phiofx.png" alt="phiofx.png" >}}

Para $n=1$, sumamos $\dfrac{\phi(2x)}{2}$, que es una copia a mitad de tamaño del término anterior:

{{< figure src="phiof2xover2.png" alt="phiof2xover2.png" >}}

A medida que crece $n$, cada nuevo término aporta una onda triangular más fina, con la mitad de amplitud y el doble de frecuencia. Esto podemos verlo como ir superponiendo montañitas cada vez más finas sobre la onda inicial.

La idea clave es que los primeros términos determinan la **forma general** de la curva, mientras que los términos posteriores solo añaden detalle.

*(Observa que cada nuevo “vértice” creado en cada iteración permanece fijo en las siguientes, porque los máximos de $\phi(2^n x)$ coinciden con los ceros de $\phi(2^m x)$ para todo $m>n$).*

{{< figure src="takagi-construction.gif" alt="takagi-construction.gif" >}}


### 1.1. Propiedades de la función de Takagi

Lo que hace especialmente interesante a la función de Takagi (tal y como ocurre con la famosa función de Weierstrass) es su carácter patológico: **es continua en todo su dominio pero no es derivable en ningún punto**.

La continuidad no es difícil de demostrar: como $0\le \phi(x)\le \tfrac12$ para todo $x\in\mathbb R$,

$$
\left|\frac{1}{2^n}\,\phi(2^n x)\right| \le \frac{1}{2^{n+1}}.
$$

Además,

$$
\sum_{n=0}^{\infty} \frac{1}{2^{n+1}} = 1 < \infty.
$$

Por el **criterio M de Weierstrass**, la serie converge uniformemente; y como cada sumando es continuo, el **teorema del límite uniforme** implica que **$T(x)$ es continua en $\mathbb R$**.

Aunque la demostración rigurosa de la no derivabilidad queda fuera del alcance de este artículo, una inspección del gráfico a simple vista muestra una estructura densa de picos a todas las escalas (si haces zoom lo suficiente en cualquier punto, eventualmente te topas con una arista), lo que sugiere que no existe una tangente bien definida en ningún punto.

Otra propiedad notable de esta función es su **autosimilitud**. Por ejemplo, escribamos

$$
T(x)=\phi(x)+\tfrac12\phi(2x)+\tfrac14\phi(4x)+\dots
$$

Hagamos zoom en el intervalo $x\in\big[\tfrac12,\tfrac34\big]$ y rescalémoslo a $[0,1]$ mediante

$$
x=\tfrac12+\tfrac14 t,\qquad t\in[0,1].
$$

Sustituyendo,

$$
T\Big(\tfrac12+\tfrac14 t\Big)
=\phi\Big(\tfrac12+\tfrac14 t\Big)
+\tfrac12\phi\Big(1+\tfrac12 t\Big)
+\sum_{n=2}^\infty\frac{\phi(2^{n-2}t)}{2^n}.
$$

En la cola, tomamos $m=n-2$ y usamos la $1$-periodicidad de $\phi$ para factorizar la escala:

$$
\sum_{n=2}^\infty\frac{\phi(2^{n-2}t)}{2^n}
=\tfrac14\sum_{m=0}^\infty\frac{\phi(2^m t)}{2^m}=\tfrac14 T(t).
$$

Ahora, veamos cómo los dos primeros términos simplemente aportan un desplazamiento vertical. En $x\in[\tfrac12,\tfrac34]$ vale $\phi(x)=1-x$, luego

$$
\phi\Big(\tfrac12+\tfrac14 t\Big)=\tfrac12-\tfrac14 t.
$$

Por $1$-periodicidad, $\phi(1+\tfrac12 t)=\phi(\tfrac12 t)$ y, como $\tfrac12 t\in[0,\tfrac12]$, $\phi(\tfrac12 t)=\tfrac12 t$, así que

$$
\tfrac12\phi\Big(1+\tfrac12 t\Big)=\tfrac14 t.
$$

Sumando ambas, obtenemos la constante $\tfrac12$, independiente de $t$.

Por tanto,

$$
T\Big(\tfrac12+\tfrac14 t\Big)=\tfrac12+\tfrac14 T(t),
$$

es decir, en el intervalo $[\tfrac12,\tfrac34]$ la gráfica de $T$ es exactamente una copia a escala $1/4$ de la función completa, desplazada verticalmente en $\tfrac12$.

El mismo argumento, aplicado a cualquier subintervalo diádico $[\tfrac{k}{2^n},\tfrac{k+1}{2^n}]$, muestra que, bajo ciertas condiciones,

$$
T(x)=T(x_0)+2^{-n}\,T\big(2^n(x-x_0)\big),
$$

donde $x_0=\tfrac{k}{2^n}$ es el extremo izquierdo del intervalo [1, 9].

En esencia, encontramos infinitas copias más pequeñas de la curva de Takagi, anidadas a cada escala diádica:

{{< figure src="ezgif-6dd4ff4bf27fb7.gif" alt="ezgif-6dd4ff4bf27fb7.gif" >}}

## 2. La familia de Takagi–Landsberg: primera generalización

Una vez entendida la función clásica, la siguiente pregunta que debemos hacernos no es simplemente “buscar otra función continua y no derivable”. Para eso ya está la de Weierstrass, aunque proviene de una construcción armónica distinta. La cuestión que realmente nos interesa es: *¿podemos generalizar la propia receta con la que se construye Takagi?* Si mantenemos la onda triangular pero **relajamos algunas elecciones**, ¿qué nuevas familias surgen?

Una primera generalización muy natural consiste en modificar los coeficientes de la serie. Recordemos que la función clásica es

$$
T(x)=\sum_{n=0}^{\infty}\frac{\phi(2^n x)}{2^n}.
$$

Aquí, el factor $1/2^n$ controla la velocidad de decaimiento de los términos. Supongamos que lo sustituimos por $1/2^{nH}$, con $H>0$:

$$
T_H(x)=\sum_{n=0}^{\infty}\frac{\phi(2^n x)}{2^{nH}}.
$$

Así obtenemos, para cada $H$, una función de la misma naturaleza que nuestra función original. A este $H$ se le llama **parámetro de Hurst.** Si te das cuenta:

- Si $H\in(0,1)$, la función se vuelve más ”rugosa”: cuanto menor es $H$, más lentamente decae la serie y más peso conservan las oscilaciones finas.
- Para $H=1$ recuperamos la **función de Takagi clásica**.
- Si $H>1$, los coeficientes decaen más deprisa: las altas frecuencias se amortiguan y la función resulta más suave. De hecho, para $H$ grande llega a ser no solo continua, sino derivable (e incluso analítica).

Ahora podemos reescribir

$$
\frac{1}{2^{nH}}=(2^{-H})^n.
$$

lo que nos deja un parámetro mucho más cómodo con el que trabajar:

$$
w=2^{-H},\qquad 0<w<1,
$$

Así, podemos definir

$$
T_w(x)=\sum_{n=0}^{\infty} w^n\,\phi(2^n x).
$$

De esta forma desvinculamos la base del decaimiento exponencial de la escala $2^n$. Así, hemos definido una familia $T_{w\in(0,1)}$, conocida como la **curva de Takagi–Landsberg**.

Al igual que ocurría con $H$, diferentes $w$ dan distintos “niveles de rugosidad”:

- Con $w=\tfrac12$ volvemos a la función de Takagi clásica.
- Con $w$ pequeño (cerca de $0$), los términos altos desaparecen muy rápido y $T_w$ se parece mucho a una simple onda triangular.
- Con $w$ grande (cerca de $1$), las oscilaciones en todas las escalas tienen pesos similares, y la gráfica es muy oscilante.
- Curiosamente, para ciertos valores de $w$ tenemos **expresiones cerradas**. En el caso más llamativo, para $w=\tfrac14$ , la suma de infinitas ondas triangulares termina por dejarnos una simple parábola:

{{< figure src="w-parameter.gif" alt="w-parameter.gif" >}}

Esto ha sido un buen comienzo… pero podemos llevarlo bastante más lejos.

## 3. La clase de Takagi

Hasta ahora hemos usado coeficientes de **decaimiento geométrico** $w^n$. Eso hace la serie sencilla, autosimilar y fácil de visualizar. Pero la siguiente pregunta natural es: *¿y si relajamos también eso?*

Sea $(w_n)_{n\ge 0}$ una sucesión de pesos tal que

$$
\sum_{n=0}^{\infty} w_n<\infty. \tag{*}
$$

Por el **criterio M de Weierstrass**, como $|\phi(x)|\le \tfrac12$, esta condición nos basta para garantizar que la serie

$$
T_{\mathbf w}(x)=\sum_{n=0}^{\infty} w_n\,\phi(2^n x),
\qquad \phi(x)=\min(x,1-x),
$$

converge uniformemente y, por tanto, define una función continua.

Al permitir una **familia amplia de pesos $(w_n)$** que decaen lo bastante rápido, redescubrimos la **clase de Takagi**, introducida por **M. Hata y M. Yamaguti (1984)** [7].

Puntos clave:

- La función clásica es $w_n=2^{-n}$.
- La familia de Hurst/Takagi–Landsberg es $w_n=2^{-nH}$ (es decir, $w_n=w^n$).
- Para una sucesión general $(w_n)$, $T_{\mathbf w}$ sigue siendo *continua* y, a menudo, *no derivable en ningún punto* (más adelante veremos cuándo), pero puede perderse la autosimilitud exacta.
- Elegir $(w_n)$ permite elegir con gran flexibilidad la “rugosidad” a distintas escalas.

En la visualización de abajo comparamos tres secuencias de pesos que satisfacen la condición de convergencia. Aunque cada una produce “perfiles” distintos, comparten continuidad, estructura fractal y no derivabilidad:

{{< figure src="weight-comparison.png" alt="weight-comparison.png" >}}

### 3.1. Derivabilidad en la clase de Takagi

Ahora que hemos visto de manera intuitiva cómo la sucesión $(w_n)$ moldea la rugosidad de $T_{\mathbf w}$, hagamos un resumen de las propiedades de derivabilidad con un poco más de rigor.

Consideremos la sucesión normalizada $\tilde w_n = w_n\,2^n$. Esta mide, por así decirlo, la desviación de cada nivel de la serie respecto a la función de Takagi clásica:

$$
T_{\mathbf w}(x)=\sum_{n=0}^{\infty} \tilde w_n\,\frac{\phi(2^n x)}{2^n}.
$$

Entonces, según **N. Kôno (1987)** [8]:

1. $T_{\mathbf w}$ es **no derivable en ningún punto** si y solo si
   $$
   \lim_{n\to\infty}\tilde w_n\neq 0 \quad (\tilde w_n\notin c_0).
   $$
   Es decir, los términos de la serie decaen similar o más despacio a como lo hacen en la función original. (Por ejemplo, $w_n=2^{-n}\Rightarrow \tilde w_n=1\not\to0$).

2. $T_{\mathbf w}$ es **no derivable casi en todo punto**, pero sí derivable en un **conjunto nulo no numerable** (un conjunto con un número incontable de puntos, pero lo suficientemente “pequeño” como para ser cubierto por la unión de una cantidad numerable de intervalos de longitud total tan pequeña como se quiera), **y el rango de su derivada es $\mathbb R$** (la derivada en estos puntos puede adoptar cualquier valor real), si y solo si
   $$
   \lim_{n\to\infty}\tilde w_n =0 \quad \text{pero}\quad \sum_n (\tilde w_n)^2=\infty \quad (\tilde w_n\notin \ell_2).
   $$
   (Por ejemplo, $w_n=\dfrac{1}{\sqrt n\,2^n}\Rightarrow \tilde w_n=\dfrac{1}{\sqrt n}\to0$, pero $\sum \dfrac1n=\infty$).

3. $T_{\mathbf w}$ es **absolutamente continua** y, por tanto, derivable casi en todo punto, si y solo si
   $$
   \sum_n (\tilde w_n)^2<\infty \quad (\tilde w_n\in \ell_2).
   $$
   (Por ejemplo, $w_n=2^{-3n/2}\Rightarrow \tilde w_n=2^{-n/2}$ y $\sum 2^{-n}<\infty$).

Intuición rápida:
- Si los detalles finos decaen parecido a cómo lo hacen en la Takagi clásica, la función es demasiado “oscilante” y no hay derivada en ningún punto.
- Si decaen más deprisa, pero no demasiado, la función no es derivable casi en ninguna parte, aunque hay un conjunto “delgado” (nulo, pero no numerable) donde sí lo es, y la derivada puede tomar cualquier valor.
- Si decaen suficientemente rápido (son cuadrado-sumables), la función es lo bastante “regular” para tener derivada casi en todas partes.

En resumen, el **ritmo de decaimiento de $\tilde w_n$** determina la rugosidad y la derivabilidad de $T_{\mathbf w}$.

## 4. De tiendas diádicas a nubes de puntos: la generalización de Ferrera–Gómez

### 4.1. La función de Takagi generalizada

Parémonos un segundo a mirar el sumando $\phi(2^n x)/2^n$ desde otra perspectiva.

En lugar de pensar en “la distancia de $2^n x$ al entero más cercano, dividida entre $2^n$”, podemos ver este término como una función que mide **la distancia de $x$ a un conjunto de puntos**:

$$
D_n^{\mathrm{dyadic}}=\left\{\frac{k}{2^n}: k=0,1,\dots,2^n\right\}\subset[0,1],
$$

, que es un subconjunto de $[0,1]$ llamado la **malla diádica** a escala $2^{-n}$. En otras palabras, $\phi(2^n x)/2^n$ es la distancia de $x$ al punto más cercano en $D_n^{\mathrm{dyadic}}$: 

$$
\frac{\phi(2^n x)}{2^n}=g_n^{\mathrm{dyadic}}(x)=\operatorname{dist}(x,D_n^{\mathrm{dyadic}}).
$$

Pensarlo de esta forma nos deja mucho más clara la intuición geométrica: para cada $n$, la función $g_n(x)=\frac{\phi(2^n x)}{2^n}$ construye **“tiendas” triangulares** entre los puntos de $D_n^{\mathrm{dyadic}}$: alcanzan su máximo en los puntos medios de cada hueco y bajan linealmente a cero en los extremos. Al apilar estas tiendas a distintas escalas, emerge la forma rugosa y autosimilar de la Takagi clásica:

$$
T(x)=\sum_{n=0}^{\infty} g_n^{\mathrm{dyadic}}(x).
$$

De igual modo, la clase de Takagi puede escribirse como

$$
T_{\mathbf w}(x)=\sum_{n=0}^{\infty} \tilde w_n\, g_n^{\mathrm{dyadic}}(x),
$$

donde $\tilde w_n=w_n\,2^n$ (pues $w_n\phi(2^n x)=\tilde w_n\,\dfrac{\phi(2^n x)}{2^n}=\tilde w_n\,g_n^{\mathrm{dyadic}}(x)$).

La pregunta natural que conviene hacerse ahora es:

*¿Qué pasa si conservamos la mecánica de apilar tiendas a escalas cada vez más finas, pero sustituimos la malla diádica $D_n^{\mathrm{dyadic}}$ por otros conjuntos de puntos?* 

*¿Seguiremos obteniendo funciones continuas y no derivables? ¿Podemos variar la forma y el espaciado de las tiendas sin perder la estructura multiescalar que hace fractales a las funciones de Takagi?*

{{< figure src="grid-change.gif" alt="grid-change.gif" >}}

*(En este gif estamos transicionando de $D_4^{\mathrm{dyadic}}$ a un subconjunto más “arbitrario” (aunque controlado) de $[0,1]$. Observa cómo cambia $g_4(x)=\operatorname{dist}(x,D_4)$ en función de esto).*

Esto es, en esencia, la **generalización de Ferrera–Gómez** [3]. La clave no es la cuadrícula diádica en sí, sino que:

1. Cada nivel $n$ corresponde a un **conjunto finito $D_n\subset[0,1]$**.  
2. Los puntos de $D_n$ son cada vez más densos y su espaciado está controlado (ni demasiado pequeño ni demasiado grande) respecto a una escala $\alpha_n$.  
3. Las “tiendas” (funciones distancia a $D_n$) se apilan a través de las escalas, con alturas que decrecen de forma natural al aumentar $n$, formando la serie $\sum g_n(x)$.

Más en detalle: definimos $\mathcal D=(D_n)_n$ como una sucesión creciente ($D_0\subset D_1\subset\cdots$) de conjuntos finitos que cumple:

1. $0, 1 \in D_0$  

   (y por tanto en todo conjunto posterior $D_n$).

2. $D = \bigcup\limits_{n=0}^{\infty} D_n$ es un subconjunto **denso** y **numerable** de $[0,1]$. Decimos que $(D_n)_n$ es una *descomposición* de $D$.  

   (La unión de todos los conjuntos $D_n$ acaba “llenando” $[0,1]$, de modo que, para cualquier punto arbitrario $p\in[0,1]$ y para cualquier número $\epsilon>0$ por pequeño que sea, puede encontrarse un punto $p_\epsilon\in D$ (y por tanto en algún  $D_n$) tal que la distancia entre $p$ y $p_\epsilon$ es menor que $\epsilon$).

3. Existen $\rho\in(0,1]$ y una sucesión no creciente $\alpha_n\downarrow0$ tales que, si $x,y\in D_n$ son puntos consecutivos (es decir, $(x,y)\cap D_n=\varnothing$), entonces se cumple  
   $$
   \rho\alpha_n \le |y-x|\le \alpha_n.
   $$
   
   (Las distancias entre puntos consecutivos en $D_n$ caen en el rango $[\rho\alpha_n, \alpha_n]$, que se hace más pequeño a medida que crece $n$. Así, el espaciado entre puntos consecutivos está controlado —ni demasiado juntos ni demasiado separados— y los conjuntos $D_n$ se vuelven más densos con $n$).

Ferrera y Gómez demostraron lo siguiente [3]:

> Para cualquier descomposición $(D_n)_n$ de este tipo, la función  
>
> $$
> T_D(x)=\sum_{n=0}^\infty \operatorname{dist}(x,D_n)
> $$
>
> es continua en $[0,1]$ y no derivable en ningún punto.

*(Curiosamente, se puede demostrar que, para cualquier conjunto $D\subset[0,1]$ denso y numerable, puede encontrarse una sucesión $(D_n)_n$ (una descomposición de $D$) que cumpla estas condiciones).*

---

Pero, ¿por qué son tan importantes importantes estas condiciones?

Como Ferrera, Gómez Gil y Llorente exploran en su artículo [4,5], estas condiciones sirven de barreras que evitan que la función se “suavice” por accidente en ciertos puntos. Si los puntos de $D_n$ pudieran apelotonarse sin control, podría construirse una sucesión de pesos tal que que las “tiendas” se cancelasen entre sí, creando puntos derivables. Estas condiciones garantizan que la oscilación esté distribuida de forma consistente en todas las escalas, preservando la no derivabilidad que caracteriza a la función de Takagi.

De hecho, el **Ejemplo 10** de su artículo muestra que, sin ese control de espaciado, puede existir una función de la clase derivable en ciertos puntos, aunque la sucesión de pesos sugiera lo contrario. Esas reglas garantizan una estructura fractal y “picuda” robusta [5].

---

Visto así, se nos abre todo un universo de funciones: en lugar de la malla diádica, podemos elegir **cualquier sucesión de conjuntos finitos $D_n$** siempre que tenga un espaciado adecuado. Las funciones distancia a esos conjuntos, sumadas en $n$, producen funciones continuas, no derivables y con la geometría multiescala de “tiendas” apiladas.

En pocas palabras, la Takagi clásica es el **caso especial** en que los  son mallas diádicas. Al abstraer a nubes de puntos, nos damos cuenta de que la no derivabilidad es una consecuencia estructural de apilar tiendas a todas las escalas, no de los números diádicos en sí. Así, definimos la **función de Takagi generalizada** (no ponderada) como
$$
T_D(x)=\sum_{n=0}^{\infty} g_n(x),\qquad g_n(x)=\operatorname{dist}(x,D_n),
$$
donde $(D_n)_n$ es una sucesión de conjuntos que cumple las condiciones anteriores.

Intuitivamente: cada $g_n$ es $1$-Lipschitz ($|g_n(x)-g_n(y)|\le |x-y|$, su pendiente nunca supera $1$) y, en cada hueco entre puntos consecutivos de $D_n$, dibuja exactamente una tienda triangular: sube con pendiente $\pm 1$ hasta el centro y baja simétricamente.

Con esta nueva perspectiva, el gif que hemos visto al principio de la sección mainifesta exactamente el tipo de descomposición que buscábamos:

{{< figure src="grid-change.gif" alt="grid-change.gif" >}}

### 4.2. La clase de Takagi generalizada

Ahora, el siguiente paso lógico es combinar todas las libertades que hemos ido adquiriendo conforme relajábamos condiciones. Eso es, precisamente, de lo que se trata la **clase de Takagi generalizada** [5]. Combinando las ideas de su Función Generalizada, con sus descomposiciones de conjuntos, y las sucesiones de pesos que hemos explorado anteriormente, los autores definieron la Clase Generalizada de Takagi de la siguiente forma: 

Sea $\mathcal D=(D_n)_{n\ge 0}$ una descomposición de un $D\subset[0,1]$ denso y numerable que cumple las condiciones anteriores. Entonces, para una **secuencia de pesos** $w=(\tilde w_n)_n$ que satisfaga

$$
\sum_{n=0}^{\infty} \tilde w_n\,\alpha_n <\infty,
$$

definimos la Función Generalizada de Takagi asociada a $\mathcal D$ y $w$:

$$
T_{D,w}(x)=\sum_{n=0}^{\infty} \tilde w_n\, g_n(x),\qquad g_n(x)=\operatorname{dist}(x,D_n).
$$

*(En el caso diádico, $D_n=D_n^{\mathrm{dyadic}}$ y $\alpha_n=\tfrac{1}{2^n}$; la condición de sumabilidad coincide con la de antes para $w_n=\tilde w_n/2^n$).*

Bajo algunas condiciones adicionales suaves sobre la descomposición, la **clase de Takagi generalizada** forma un subespacio cerrado de $C[0,1]$, isomorfo a $\ell^1$ *(es decir, un subconjunto de funciones continuas en $[0,1]$ tal que, siempre que tomes una sucesión de funciones de este subconjunto convergente, su límite sigue perteneciendo al subconjunto, y cada función corresponde de manera única a una sucesión sumable de números, donde el “tamaño” de la función refleja la suma total de esa sucesión).* [5]

#### Por qué esta generalización tiene sentido

- La Takagi clásica corresponde a la malla diádica $D_n=\{k/2^n\}$ y pesos  $\tilde{w}_n=1$.
- En la clase generalizada permitimos tanto **conjuntos $D_n$ flexibles** (cada vez más densos, con espaciado controlado) como **pesos $\tilde{w}_n$ flexibles**, manteniendo la intuición de “tiendas” apiladas a múltiples escalas.
- La continuidad y las propiedades generales sobreviven, pero ahora exploramos una familia mucho más rica, con ejemplos exóticos en términos de derivabilidad o propiedades fractales.

#### Una regla sencilla para detectar no derivabilidad

Tras levantar todo este andamiaje, nos queda una pregunta práctica: ¿podemos encontrar una regla sencilla para saber cuándo $T_{D,w}$ es no derivable en ningún punto? Hace falta tener en cuenta las complejas propiedades de $D$ para cada caso?

Aquí es donde el artículo ofrece una respuesta soprendenemente elegante: bajo ciertas condiciones muy generales sobre la descomposición (por ejemplo, $D_n\subset D_{n+1}$ y que en cada intervalo se añadan puntos nuevos), el comportamiento de nuestra función $T_{D,w}$ depende **exclusivamente de los pesos elegidos**.

Los autores, generalizando el teorema de Kôno, demuestran que $T_{D,w}$ es **no derivable en ningún punto si y solo si la sucesión de pesos no tiende a cero** [4,5]:

> Una función de la Clase Generalizada de Takagi es no derivable en ningún punto si y solo si sus pesos $\tilde w_n$ **no se van a 0**:
> $$
> \lim_{n\to\infty}\tilde w_n\neq 0.
> $$

Esto es un resultado potentísimo: mientras los pesos mantengan cierta magnitud y no se desvanezcan, su contribución es suficiente para garantizar que la función tenga picos en todo punto. La disposición concreta de los $D_n$ no importa para esta propiedad básica, siempre y cuando  se respeten reglas generales que hemos establecido hasta ahora.

#### Una Simplificación Inesperada: Pesos No Negativos

Esta historia, sin embargo, tiene una última sorpresa para nosotros. Hemos visto que, para garantizar la no derivabilidad, a menudo hacen falta ciertas condiciones sobre la descomposición $(D_n)_n$ que eviten cancelaciones indeseadas. Sin embargo, el artículo revela algo notable: si restringimos nuestra sucesión de pesos $w=(w_n)_n$ a ser **no negativa** (es decir, $w_n \ge 0$ para todo $n$), entonces ¡podemos tirar todas esas condiciones extra sobre la descomposición a la basura!

En concreto, el **Corolario 22** del artículo establece [5]:

> Supongamos que $w \not\to 0$ y $w_n \ge 0$ para todo $n$. Entonces, $T_{D,w}$ no es derivable en ningún punto. (Sin necesidad de condiciones adicionales sobre $D$).

Es un resultado precioso. Cuando todos los pesos son positivos, cada “tienda” $w_n g_n(x)$ se suma de manera constructiva. No hay posibilidad de que las pendientes se cancelen entre sí, algo que sí podría ocurrir con pesos negativos que generasen “tiendas invertidas”. Así, la rugosidad se acumula en todas las escalas, garantizando que la función sea irregular en todo punto.

Esto nos muestra que la geometría fundamental de las tiendas apiladas es increíblemente robusta a la hora de producir funciones no derivables, especialmente cuando no permitimos ninguna interferencia destructiva.



## 5. La formulación original: expansión binaria

Tras recorrer el vasto paisaje de funciones generalizadas de Takagi, demos un paso atrás para apreciar el ingenioso origen de la función clásica. Aunque pueda resultar sorprendente, Takagi no definió su función mediante tiendas triangulares. En lugar de eso, la encontró en un sitio, a priori, completamente inconexo: **la representación binaria de los números positivos menores que 1**.

Sigamos sus pasos, reescribiendo gradualmente su definición hasta redescubrir la formulación geométrica moderna que hoy conocemos.

Nuestro objetivo es tender un puente visual e intuitivo entre ambas perspectivas. Veremos que la complicada fórmula original de Takagi, basada en contar desacuerdos entre dígitos binarios, es una forma tremendamente ingeniosa de describir cómo se sitúa un punto $x$ en cada capa de ondas triangulares.

### Expansiones binarias

Todo número real $x\in[0,1]$ puede expresarse en binario:

$$
x=0.\varepsilon_1\varepsilon_2\varepsilon_3\dots\quad\text{con } \varepsilon_j\in\{0,1\}.
$$

Lo que equivale a

$$
x=\sum_{j=1}^\infty \frac{\varepsilon_j}{2^j}.
$$

Por ejemplo:

- $x=0.101_2=\tfrac12+\tfrac0{4}+\tfrac1{8}=\tfrac58$.
- $x=0.011_2=\tfrac0{2}+\tfrac1{4}+\tfrac1{8}=\tfrac38$.

Los racionales diádicos, como $\tfrac12$, tienen dos expansiones: $0.1000\dots_2$ y $0.0111\dots_2$, de la misma forma que $0.999\ldots=1.000$ en decimal.

Con esto, Takagi definió su función como [10, 1, 9]:

$$
T(x):=\sum_{m=1}^\infty \frac{1}{2^m}\sum_{k=1}^{m-1}|\varepsilon_m-\varepsilon_k|.
$$

En pocas palabras: para cada dígito $\varepsilon_m$, la fórmula cuenta con cuántos de los dígitos anteriores ($\varepsilon_1,\dots,\varepsilon_{m-1}$) “no coincide”, pondera por $2^{-m}$ y suma.



### Nos aproximamos a la Perspectiva Geométrica

La fórmula de Takagi es una suma doble. Como todos los términos son positivos, podemos **cambiar el orden** de sumación. En vez de agrupar por el dígito externo $\varepsilon_m$, reagrupamos por el interno $\varepsilon_k$ y sumamos sus interacciones con todos los dígitos posteriores $\varepsilon_m$. Tras reindexar, aparece una estructura mucho más clara:

$$
T(x)=\sum_{n=0}^\infty\left(\sum_{j=1}^\infty \frac{|\varepsilon_{n+j}-\varepsilon_{n+1}|}{2^{n+j}}\right).
$$

### El paso clave: por qué los desacuerdos de bits miden una distancia diádica

La expresión entre paréntesis es el eslabón crucial. Puede demostrarse que es idéntica a la altura de nuestras tiendas triangulares [1, 9]:

$$
\sum_{j=1}^\infty \frac{|\varepsilon_{n+j}-\varepsilon_{n+1}|}{2^{n+j}}
=\frac{\phi(2^n x)}{2^n}.
$$

Intentemos entender intuitivamente por qué comparar bits equivale a medir distancia a la malla diádica.

Primero, las piezas del puzle:

- Para $x=0.\varepsilon_1\varepsilon_2\varepsilon_3\cdots$, definiimos para cada $n\ge 0$ la cola fraccionaria

  $$
  y_n:=\operatorname{frac}(2^n x)=0.\varepsilon_{n+1}\varepsilon_{n+2}\varepsilon_{n+3}\cdots \in \[0,1).
  $$
  
- La tienda triangular es $\phi(t)=\operatorname{dist}(t,\mathbb Z)$, así que $\phi(2^n x)$ es la distancia de $y_n$ al entero más cercano, es decir, o bien $y_n$, o bien $1-y_n$.

Ahora, demostremos la equivalencia por casos según el primer dígito de la cola, $\varepsilon_{n+1}$.

#### Caso A: $\varepsilon_{n+1}=0$.

Entonces $y_n\in \[0,\tfrac12)$, por lo que el entero más cercano es $0$ y $\phi(2^n x)=y_n$. En binario,
$y_n=\sum_{j=1}^\infty \varepsilon_{n+j}\,2^{-j}$. Como $\varepsilon_{n+1}=0$, el “desacuerdo” es $|\varepsilon_{n+j}-\varepsilon_{n+1}|=\varepsilon_{n+j}$. La suma queda:

$$
\sum_{j=1}^\infty|\varepsilon_{n+j}-\varepsilon_{n+1}|\,2^{-j}
=\sum_{j=1}^\infty \varepsilon_{n+j}\,2^{-j}=y_n.
$$

Multiplicando por $2^{-n}$:

$$
\sum_{j=1}^\infty \frac{|\varepsilon_{n+j}-\varepsilon_{n+1}|}{2^{n+j}}
=\frac{y_n}{2^n}=\frac{\phi(2^n x)}{2^n}.
$$

#### Caso B: $\varepsilon_{n+1}=1$.

Ahora $y_n\in \[\tfrac12,1)$, el entero más cercano es $1$, y $\phi(2^n x)=1-y_n$. En binario,
$1-y_n=\sum_{j=1}^\infty (1-\varepsilon_{n+j})\,2^{-j}$. Como $\varepsilon_{n+1}=1$, el “desacuerdo” es $1-\varepsilon_{n+j}$. La suma queda:

$$
\sum_{j=1}^\infty|\varepsilon_{n+j}-\varepsilon_{n+1}|\,2^{-j}
=\sum_{j=1}^\infty (1-\varepsilon_{n+j})\,2^{-j}=1-y_n.
$$

Y multiplicando por $2^{-n}$:

$$
\sum_{j=1}^\infty \frac{|\varepsilon_{n+j}-\varepsilon_{n+1}|}{2^{n+j}}
=\frac{1-y_n}{2^n}=\frac{\phi(2^n x)}{2^n}.
$$

*Interpretación: Cuando el primer dígito de la cola es 1, los desacuerdos son ahora los ‘0’. La suma reconstruye la distancia complementaria hasta 1, que vuelve a ser la distancia geométrica correcta.*

En ambos casos, **la suma de desacuerdos con el primer bit de la cola es un atajo computacional para medir la distancia escalada al punto diádico más cercano**.

### ¿Qué acaba de pasar?

Sumando en $n$, recuperamos la formulación geométrica moderna a partir de la binaria original de Takagi:

$$
T(x)=\sum_{n=0}^\infty \frac{\phi(2^n x)}{2^n}.
$$

Hemos partido de un problema combinatorio extraño (contar desacuerdos de dígitos) y, reordenando la suma, hemos descubierto que es idéntica a la superposición infinita de ondas triangulares. Esta dualidad es precisamente lo que hace de la función de Takagi un objeto tan bonito y sorprendente.

## 6. Donde Habitan las Funciones “Salvajes”: Aplicaciones Sorprendentes 

Después de seguir el recorrido de la función de Takagi, desde una curiosa fórmula combinatoria hasta una vasta generalización geométrica, surge una pregunta razonable: ¿es todo esto solo un curioso y abstracto pasatiempo para matemáticos? ¿O llega este “monstruo” a escapar del zoo y aparecer en otros campos?

La respuesta, como muestra [1], es un rotundo sí. El papel único de la función de Takagi como puente entre estructuras digitales discretas y geometría fractal continua la convierte en la herramienta perfecta para describir fenómenos en áreas que, a primera vista, parecen completamente ajenas. Veamos dos de los ejemplos más elegantes.

### 1. El Contable Secreto de los Dígitos Binarios

La historia de la función de Takagi empezó con las expansiones binarias y, como en toda buena narrativa circular, encontramos una de sus aplicaciones más notables justo ahí.

Consideremos una pregunta sencilla de teoría de números: si escribes todos los enteros de $0$ a $N-1$ en binario, ¿cuántas veces aparece en total el dígito ‘1’?

Definamos $s(n)$ como la **suma binaria de los dígitos** de un entero $n$. Por ejemplo, como $n=5$ es `101` en binario, $s(5)=2$. Como $n=12$ es `1100`, $s(12)=2$. Nos interesa la suma total:

$$
S_1(N) = \sum_{n=0}^{N-1} s(n)
$$

Para ciertos valores “bonitos” de $N$, esto es sencillo. Si $N$ es una potencia de 2, digamos $N=2^k$, hay una simetría perfecta. Entre los números de $0$ a $2^k-1$, cada posición binaria vale ‘1’ exactamente la mitad de las veces. Esto conduce a una fórmula limpia y elegante:

$$
S_1(2^k) = \frac{2^k \cdot k}{2} = \frac{N \log_2 N}{2}
$$

*(Obsérvese que los números entre $0$ y $2^k - 1$ recorren todas las combinaciones posibles de $k$ ceros y unos. Por tanto, cada posición binaria toma el valor ‘1’ en la mitad de esas combinaciones, y ‘0’ en la otra mitad. Con $2^k$ números y $k$ posiciones, esto da $2^k \cdot \tfrac{k}{2}$ unos en total, de donde se obtiene la fórmula anterior.)*

¿Pero qué ocurre para un $N$ arbitrario que no sea potencia de dos? Esta simetría se rompe. La fórmula se convierte en una buena aproximación, pero aparece un error. Los matemáticos Trollope y Delange se dedicaron, precisamente, a estudiar ese error [10, 2].

La expresión exacta es:

$$
S_1(N) = \frac{N \log_2 N}{2} - E(N)
$$

{{< figure src="takagi_s1_visual.png" alt="takagi_s1_visual.png" >}}

*(Las líneas verticales grises marcan las potencias de dos).*

**¿Cómo describimos exactamente este término de error $E(N)$?**

Pues bien, como seguramente sospeches, el error se puede expresar con una fórmula que involucra a la función de Takagi [1]. Si escribimos $N$ de la forma $N = 2^m(1+x)$, donde $m$ es un entero y $0 \le x < 1$ (de modo que $2^m$ es la mayor potencia de dos menor que $N$, y $(1+x)$ es $N/2^m$), entonces:

$$
E(N) = 2^{m-1} \left\\{ 2x - T(x) - (1+x)\log_2(1+x) \right\\}
$$

Visto desde lejos, $S_1(N)$ casi parece una línea recta en un gráfico. Pero al acercarnos aparece una sutil desviación: una fluctuación íntimamente ligada a la expresión binaria de $N$. Esta desviación no es otra cosa que la función de Takagi, escondida a plena vista. Es como si nuestra curva continua llevase la contabilidad perfecta del baile discreto entre ceros y unos:

{{< figure src="takagi_error.png" alt="takagi_error.png" >}}

### 2. La forma óptima en un hipercubo

Cambiemos ahora de terreno, de la teoría de números a la geometría y la combinatoria. Imagina un cuadrado sencillo. Tiene 4 vértices y 4 aristas. Ahora piensa en un cubo en 3D: 8 vértices y 12 aristas. Si seguimos, un hipercubo de 4D (un teseracto) tiene 16 vértices y 32 aristas. A esta estructura se la llama el **n-cubo**.

Consideremos ahora el siguiente problema, conocido como el **problema isoperimétrico discreto**:

> Si tienes que elegir $k$ vértices en un n-cubo, ¿cómo puedes colocarlos para **minimizar el número de aristas** que conectan tu conjunto elegido con los vértices que *no* elegiste?

Es como buscar el grupo de vértices con la menor “superficie” posible (las aristas de frontera) para un “volumen” dado (el número de vértices $k$). Llamemos a este número mínimo de aristas de frontera $\theta(n,k)$. Este valor nos dice la forma más “compacta” o “eficiente” de agrupar $k$ vértices en un espacio de alta dimensión.

Podrías pensar que la respuesta depende de $n$ y $k$ de una manera muy compleja. Y tendrías razón. Pero, ¿qué ocurre si miramos el problema desde lejos, dejando que la dimensión $n$ crezca hasta el infinito?

En un resultado muy llamativo, Guu demostró que este complejo problema combinatorio se simplifica hasta adoptar una forma familiar. Si pensamos en la fracción de vértices elegidos como $x = k/2^n$, el tamaño óptimo de la frontera, al escalarse, converge exactamente a la función de Takagi [6].

Formalmente, la relación es [6]:

$$
\lim_{n \to \infty} \frac{\theta(n, \lfloor 2^n x \rfloor)}{2^n} = T(x)
$$

Esto nos dice que la curva de Takagi es un mapa universal para la proporción óptima “superficie-volumen” en un hipercubo de alta dimensión.

- El valor de $T(x)$ para una fracción $x$ representa la proporción de aristas de frontera para el grupo más eficiente que ocupa esa fracción de vértices.
- Los puntos donde $T(x)$ es bajo corresponden a formas muy eficientes de agrupar vértices.
- El mínimo único de $T(x)$ en $x=1/2$ refleja que la elección más eficiente es tomar exactamente la mitad de los vértices. Esto minimizes la frontera, como cortar el cubo justo por la mitad.

Una vez más, una función aparentemente caótica y no derivable en ningún punto da la respuesta elegante y universal a un problema en un dominio completamente distinto: la geometría de redes en alta dimensión.

---

## Bibliografía

1. **Allaart, P. C., & Kawamura, K.** (2012). The Takagi function: a survey. *Real Analysis Exchange*, 37(1), 1–54.  
2. **Delange, H.** (1975). Sur la fonction sommatoire de la fonction “somme des chiffres”. *Enseignement Mathématique*, 21, 31–47.  
3. **Ferrera, J., & Gómez-Gil, J.** (2018). Generalized Takagi–Van der Waerden functions and their subdifferentials. *Journal of Convex Analysis*, 25(4), 1355–1369.  
4. **Ferrera, J., Gómez Gil, J., & Llorente, J.** (2019). *A characterization of the nowhere differentiable functions of the generalized Takagi class*. arXiv:1909.05545.  
5. **Ferrera, J., Gómez Gil, J., & Llorente, J.** (2025). A characterization of the nowhere differentiable functions in the Generalized Takagi class. *Revista de la Real Academia de Ciencias Exactas, Físicas y Naturales. Serie A. Matemáticas*, 119(7).  
6. **Guu, C. J.** (2000). The McFunction [The Takagi function]. *Discrete Mathematics*, 213(1–3), 163–167.  
7. **Hata, M., & Yamaguti, M.** (1984). Takagi function and its generalization. *Japan Journal of Applied Mathematics*, 1(1), 183–199.  
8. **Kôno, N.** (1987). On generalized Takagi functions. *Acta Mathematica Hungarica*, 49(3–4), 315–324.  
9.  **Lagarias, J. C.** (2012). The Takagi Function and Its Properties. *arXiv preprint arXiv:1112.4205*.
10. **Takagi, T.** (1903). A simple example of the continuous function without derivative. *Proc. Phys.-Math. Soc. Japan*, 1, 176-177.
11. **Trollope, J. R.** (1968). An explicit expression for binary digital sums. *Mathematics Magazine*, 41(1), 21-25.