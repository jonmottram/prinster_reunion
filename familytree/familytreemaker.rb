require 'csv'
require 'set'

# Prevent double inclusion of a node
$memo = Set.new

def filter_node(per)
    return nil if !per
    return nil if per.firstname.strip == "?" ||
             per.lastname.strip == "?" ||
             per.maidenname.strip == "?"
    return per
end

def node (per,color)
    return false if $memo.member?(per.id)
    $memo << per.id
    name = [per.firstname, per.middlename,
              per.lastname,
              per.maidenname]
    name = name.collect { |n| n && n != "" ? n : nil }.compact.join(" ")
    label = "#{name}\n#{per.birthdate} - #{per.deathdate}"
    puts "   p#{per.id}  [ shape = box, style=\"filled\","+
              " fillcolor=\"#{color.to_s}\", label=\"#{label}\" ];"
    return true
end

def ancestors per

    father = filter_node(per.father)
    mother = filter_node(per.mother)

    id = per.id
    arrowhead = "normal"
    if mother and father
        merge = "m#{mother.id}and#{father.id}"
        if !$memo.member?(merge)
          puts " p#{merge} [ shape = point ]"
          puts " p#{merge} -> p#{id} [ arrowtail=none ]"
          arrowhead = "none"
        else
          $memo << merge
        end
        id = merge
    end

    if father
        if node(father,:green)
          puts "   p#{father.id} -> p#{id} [ arrowhead=#{arrowhead} ]"
          ancestors(father)
        end
    end

    if mother
        if node(mother,:gold)
          puts "   p#{mother.id} -> p#{id} [ arrowhead=#{arrowhead} ]"
          ancestors(mother)
        end
    end
end


def graph names
    names.each do |per|
        puts "Person: " + per.to_s
        puts "digraph ancestors {"
        node(per,:red)
        ancestors(per)
        puts "}"
    end
end

table = CSV.read( "PrinsterFamily.csv", headers: true )

graph(table)
