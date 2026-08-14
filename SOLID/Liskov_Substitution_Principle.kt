

// Liskov Substitution Principle

interface Shape {
    fun draw()
}

open class Rectangle : Shape{
    open var width:Float = 0f;
    open var height:Float = 0f;

    override fun draw(){
        println("This is rectangle written with $width and height $height")
    }
}

class Square: Rectangle(){
    override var width:Float = 0f
        set(value){
            field = value
            super.height = value
        }

    override var height:Float = 0f
    set(value){
        field = value
        super.width = value
    }

    override fun draw(){
        println("This is square with side $width")
    }
}

// for rectangle - widht should remain same 
fun updateHeight(rect: Rectangle) {
    rect.height = 20f
}

fun main() {
    val square = Square()
    square.width = 10f

    println("Before: width=${square.width}, height=${square.height}")

    updateHeight(square)

    println("After: width=${square.width}, height=${square.height}")
}

